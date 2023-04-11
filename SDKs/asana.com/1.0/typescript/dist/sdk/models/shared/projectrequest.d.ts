import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompactInput } from "./usercompact";
/**
 * Color of the project.
 */
export declare enum ProjectRequestColorEnum {
    DarkPink = "dark-pink",
    DarkGreen = "dark-green",
    DarkBlue = "dark-blue",
    DarkRed = "dark-red",
    DarkTeal = "dark-teal",
    DarkBrown = "dark-brown",
    DarkOrange = "dark-orange",
    DarkPurple = "dark-purple",
    DarkWarmGray = "dark-warm-gray",
    LightPink = "light-pink",
    LightGreen = "light-green",
    LightBlue = "light-blue",
    LightRed = "light-red",
    LightTeal = "light-teal",
    LightBrown = "light-brown",
    LightOrange = "light-orange",
    LightPurple = "light-purple",
    LightWarmGray = "light-warm-gray"
}
/**
 * The color associated with the status update.
 */
export declare enum ProjectRequestCurrentStatusColorEnum {
    Green = "green",
    Yellow = "yellow",
    Red = "red",
    Blue = "blue"
}
/**
 * *Deprecated: new integrations should prefer the `status_update` resource.*
 *
 * @remarks
 * A *project status* is an update on the progress of a particular project, and is sent out to all project followers when created. These updates include both text describing the update and a color code intended to represent the overall state of the project: "green" for projects that are on track, "yellow" for projects at risk, and "red" for projects that are behind.
 */
export declare class ProjectRequestCurrentStatusInput extends SpeakeasyBase {
    author?: UserCompactInput;
    /**
     * The color associated with the status update.
     */
    color: ProjectRequestCurrentStatusColorEnum;
    createdBy?: UserCompactInput;
    /**
     * [Opt In](/docs/input-output-options). The text content of the status update with formatting as HTML.
     */
    htmlText?: string;
    /**
     * The text content of the status update.
     */
    text: string;
    /**
     * The title of the project status update.
     */
    title?: string;
}
/**
 * A *status update* is an update on the progress of a particular project, portfolio, or goal, and is sent out to all of its parent's followers when created. These updates include both text describing the update and a `status_type` intended to represent the overall state of the project.
 */
export declare class ProjectRequestCurrentStatusUpdateInput extends SpeakeasyBase {
    /**
     * The title of the status update.
     */
    title?: string;
}
/**
 * The default view (list, board, calendar, or timeline) of a project.
 */
export declare enum ProjectRequestDefaultViewEnum {
    List = "list",
    Board = "board",
    Calendar = "calendar",
    Timeline = "timeline"
}
/**
 * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
 */
export declare class ProjectRequestWorkspaceInput extends SpeakeasyBase {
    /**
     * The name of the workspace.
     */
    name?: string;
}
/**
 * A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
 */
export declare class ProjectRequestInput extends SpeakeasyBase {
    /**
     * True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.
     */
    archived?: boolean;
    /**
     * Color of the project.
     */
    color?: ProjectRequestColorEnum;
    /**
     * *Deprecated: new integrations should prefer the `current_status_update` resource.*
     */
    currentStatus?: ProjectRequestCurrentStatusInput;
    /**
     * The latest `status_update` posted to this project.
     */
    currentStatusUpdate?: ProjectRequestCurrentStatusUpdateInput;
    /**
     * An object where each key is a Custom Field GID and each value is an enum GID, string, number, or object.
     */
    customFields?: Record<string, string>;
    /**
     * The default view (list, board, calendar, or timeline) of a project.
     */
    defaultView?: ProjectRequestDefaultViewEnum;
    /**
     * *Deprecated: new integrations should prefer the `due_on` field.*
     */
    dueDate?: Date;
    /**
     * The day on which this project is due. This takes a date with format YYYY-MM-DD.
     */
    dueOn?: Date;
    /**
     * *Create-only*. Comma separated string of users. Followers are a subset of members who have opted in to receive "tasks added" notifications for a project.
     */
    followers?: string;
    /**
     * [Opt In](/docs/input-output-options). The notes of the project with formatting as HTML.
     */
    htmlNotes?: string;
    /**
     * [Opt In](/docs/input-output-options). *Deprecated - please use a project template endpoint instead (more in [this forum post](https://forum.asana.com/t/a-new-api-for-project-templates/156432)).* Determines if the project is a template.
     */
    isTemplate?: boolean;
    /**
     * Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
     */
    name?: string;
    /**
     * Free-form textual information associated with the project (ie., its description).
     */
    notes?: string;
    /**
     * The current owner of the project, may be null.
     */
    owner?: string;
    /**
     * True if the project is public to its team.
     */
    public?: boolean;
    /**
     * The day on which work for this project begins, or null if the project has no start date. This takes a date with `YYYY-MM-DD` format. *Note: `due_on` or `due_at` must be present in the request when setting or unsetting the `start_on` parameter. Additionally, `start_on` and `due_on` cannot be the same date.*
     */
    startOn?: Date;
    /**
     * The team that this project is shared with.
     */
    team?: string;
    workspace?: ProjectRequestWorkspaceInput;
}
