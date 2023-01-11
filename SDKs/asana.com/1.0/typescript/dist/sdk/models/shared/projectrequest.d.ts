import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompactInput } from "./usercompact";
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
export declare enum ProjectRequestCurrentStatusColorEnum {
    Green = "green",
    Yellow = "yellow",
    Red = "red",
    Blue = "blue"
}
/**
 * A *project status* is an update on the progress of a particular project, and is sent out to all project followers when created. These updates include both text describing the update and a color code intended to represent the overall state of the project: "green" for projects that are on track, "yellow" for projects at risk, and "red" for projects that are behind.
**/
export declare class ProjectRequestCurrentStatusInput extends SpeakeasyBase {
    author?: UserCompactInput;
    color: ProjectRequestCurrentStatusColorEnum;
    createdBy?: UserCompactInput;
    htmlText?: string;
    text: string;
    title?: string;
}
export declare enum ProjectRequestDefaultViewEnum {
    List = "list",
    Board = "board",
    Calendar = "calendar",
    Timeline = "timeline"
}
/**
 * *Create-only*. The workspace or organization this project is associated with. Once created, projects cannot be moved to a different workspace. This attribute can only be specified at creation time.
**/
export declare class ProjectRequestWorkspaceInput extends SpeakeasyBase {
    name?: string;
}
/**
 * A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
**/
export declare class ProjectRequestInput extends SpeakeasyBase {
    archived?: boolean;
    color?: ProjectRequestColorEnum;
    currentStatus?: ProjectRequestCurrentStatusInput;
    customFields?: Record<string, string>;
    defaultView?: ProjectRequestDefaultViewEnum;
    dueDate?: Date;
    dueOn?: Date;
    followers?: string;
    htmlNotes?: string;
    isTemplate?: boolean;
    name?: string;
    notes?: string;
    owner?: string;
    public?: boolean;
    startOn?: Date;
    team?: string;
    workspace?: ProjectRequestWorkspaceInput;
}
