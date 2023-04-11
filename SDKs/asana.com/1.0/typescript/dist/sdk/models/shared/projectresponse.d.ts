import { SpeakeasyBase } from "../../../internal/utils";
import { CustomFieldCompact } from "./customfieldcompact";
import { CustomFieldSettingResponse } from "./customfieldsettingresponse";
import { UserCompact } from "./usercompact";
/**
 * Color of the project.
 */
export declare enum ProjectResponseColorEnum {
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
 * A *project template* is an object that allows new projects to be created with a predefined setup, which may include tasks, sections, Rules, etc. It simplifies the process of running a workflow that involves a similar set of work every time.
 */
export declare class ProjectResponseCreatedFromTemplate extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * Name of the project template.
     */
    name?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
/**
 * The color associated with the status update.
 */
export declare enum ProjectResponseCurrentStatusColorEnum {
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
export declare class ProjectResponseCurrentStatus extends SpeakeasyBase {
    author?: UserCompact;
    /**
     * The color associated with the status update.
     */
    color: ProjectResponseCurrentStatusColorEnum;
    /**
     * The time at which this resource was created.
     */
    createdAt?: Date;
    createdBy?: UserCompact;
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * [Opt In](/docs/input-output-options). The text content of the status update with formatting as HTML.
     */
    htmlText?: string;
    /**
     * The time at which this project status was last modified.
     *
     * @remarks
     * *Note: This does not currently reflect any changes in associations such as comments that may have been added or removed from the project status.*
     */
    modifiedAt?: Date;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
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
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 *
 * @remarks
 * The `resource_subtype`s for `status` objects represent the type of their parent.
 */
export declare enum ProjectResponseCurrentStatusUpdateResourceSubtypeEnum {
    ProjectStatusUpdate = "project_status_update",
    PortfolioStatusUpdate = "portfolio_status_update",
    GoalStatusUpdate = "goal_status_update"
}
/**
 * A *status update* is an update on the progress of a particular project, portfolio, or goal, and is sent out to all of its parent's followers when created. These updates include both text describing the update and a `status_type` intended to represent the overall state of the project.
 */
export declare class ProjectResponseCurrentStatusUpdate extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     *
     * @remarks
     * The `resource_subtype`s for `status` objects represent the type of their parent.
     */
    resourceSubtype?: ProjectResponseCurrentStatusUpdateResourceSubtypeEnum;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * The title of the status update.
     */
    title?: string;
}
/**
 * The default view (list, board, calendar, or timeline) of a project.
 */
export declare enum ProjectResponseDefaultViewEnum {
    List = "list",
    Board = "board",
    Calendar = "calendar",
    Timeline = "timeline"
}
/**
 * The icon for a project.
 */
export declare enum ProjectResponseIconEnum {
    List = "list",
    Board = "board",
    Timeline = "timeline",
    Calendar = "calendar",
    Rocket = "rocket",
    People = "people",
    Graph = "graph",
    Star = "star",
    Bug = "bug",
    LightBulb = "light_bulb",
    Globe = "globe",
    Gear = "gear",
    Notebook = "notebook",
    Computer = "computer",
    Check = "check",
    Target = "target",
    Html = "html",
    Megaphone = "megaphone",
    ChatBubbles = "chat_bubbles",
    Briefcase = "briefcase",
    PageLayout = "page_layout",
    MountainFlag = "mountain_flag",
    Puzzle = "puzzle",
    Presentation = "presentation",
    LineAndSymbols = "line_and_symbols",
    SpeedDial = "speed_dial",
    Ribbon = "ribbon",
    Shoe = "shoe",
    ShoppingBasket = "shopping_basket",
    Map = "map",
    Ticket = "ticket",
    Coins = "coins"
}
/**
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
 */
export declare class ProjectResponseOwner extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * *Read-only except when same user as requester*. The user’s name.
     */
    name?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
/**
 * A *Project Brief* allows you to explain the what and why of the project to your team.
 */
export declare class ProjectResponseProjectBrief extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
/**
 * A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
 */
export declare class ProjectResponseTeam extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The name of the team.
     */
    name?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
/**
 * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
 */
export declare class ProjectResponseWorkspace extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The name of the workspace.
     */
    name?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
/**
 * A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
 */
export declare class ProjectResponse extends SpeakeasyBase {
    /**
     * True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.
     */
    archived?: boolean;
    /**
     * Color of the project.
     */
    color?: ProjectResponseColorEnum;
    /**
     * True if the project is currently marked complete, false if not.
     */
    completed?: boolean;
    /**
     * The time at which this project was completed, or null if the project is not completed.
     */
    completedAt?: Date;
    completedBy?: UserCompact;
    /**
     * The time at which this resource was created.
     */
    createdAt?: Date;
    createdFromTemplate?: ProjectResponseCreatedFromTemplate;
    /**
     * *Deprecated: new integrations should prefer the `current_status_update` resource.*
     */
    currentStatus?: ProjectResponseCurrentStatus;
    /**
     * The latest `status_update` posted to this project.
     */
    currentStatusUpdate?: ProjectResponseCurrentStatusUpdate;
    /**
     * Array of Custom Field Settings (in compact form).
     */
    customFieldSettings?: CustomFieldSettingResponse[];
    /**
     * Array of Custom Fields.
     */
    customFields?: CustomFieldCompact[];
    /**
     * The default view (list, board, calendar, or timeline) of a project.
     */
    defaultView?: ProjectResponseDefaultViewEnum;
    /**
     * *Deprecated: new integrations should prefer the `due_on` field.*
     */
    dueDate?: Date;
    /**
     * The day on which this project is due. This takes a date with format YYYY-MM-DD.
     */
    dueOn?: Date;
    /**
     * Array of users following this project. Followers are a subset of members who have opted in to receive "tasks added" notifications for a project.
     */
    followers?: UserCompact[];
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * [Opt In](/docs/input-output-options). The notes of the project with formatting as HTML.
     */
    htmlNotes?: string;
    /**
     * The icon for a project.
     */
    icon?: ProjectResponseIconEnum;
    /**
     * [Opt In](/docs/input-output-options). *Deprecated - please use a project template endpoint instead (more in [this forum post](https://forum.asana.com/t/a-new-api-for-project-templates/156432)).* Determines if the project is a template.
     */
    isTemplate?: boolean;
    /**
     * Array of users who are members of this project.
     */
    members?: UserCompact[];
    /**
     * The time at which this project was last modified.
     *
     * @remarks
     * *Note: This does not currently reflect any changes in associations such as tasks or comments that may have been added or removed from the project.*
     */
    modifiedAt?: Date;
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
    owner?: ProjectResponseOwner;
    /**
     * A url that points directly to the object within Asana.
     */
    permalinkUrl?: string;
    projectBrief?: ProjectResponseProjectBrief;
    /**
     * True if the project is public to its team.
     */
    public?: boolean;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * The day on which work for this project begins, or null if the project has no start date. This takes a date with `YYYY-MM-DD` format. *Note: `due_on` or `due_at` must be present in the request when setting or unsetting the `start_on` parameter. Additionally, `start_on` and `due_on` cannot be the same date.*
     */
    startOn?: Date;
    team?: ProjectResponseTeam;
    workspace?: ProjectResponseWorkspace;
}
