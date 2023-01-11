import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { CustomFieldSettingCompact } from "./customfieldsettingcompact";
import { CustomFieldCompact } from "./customfieldcompact";
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
export declare enum ProjectResponseCurrentStatusColorEnum {
    Green = "green",
    Yellow = "yellow",
    Red = "red",
    Blue = "blue"
}
/**
 * A *project status* is an update on the progress of a particular project, and is sent out to all project followers when created. These updates include both text describing the update and a color code intended to represent the overall state of the project: "green" for projects that are on track, "yellow" for projects at risk, and "red" for projects that are behind.
**/
export declare class ProjectResponseCurrentStatus extends SpeakeasyBase {
    author?: UserCompact;
    color: ProjectResponseCurrentStatusColorEnum;
    createdAt?: Date;
    createdBy?: UserCompact;
    gid?: string;
    htmlText?: string;
    modifiedAt?: Date;
    resourceType?: string;
    text: string;
    title?: string;
}
export declare enum ProjectResponseDefaultViewEnum {
    List = "list",
    Board = "board",
    Calendar = "calendar",
    Timeline = "timeline"
}
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
**/
export declare class ProjectResponseOwner extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
/**
 * *Create-only*. The team that this project is shared with. This field only exists for projects in organizations.
**/
export declare class ProjectResponseTeam extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
/**
 * *Create-only*. The workspace or organization this project is associated with. Once created, projects cannot be moved to a different workspace. This attribute can only be specified at creation time.
**/
export declare class ProjectResponseWorkspace extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
/**
 * A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
**/
export declare class ProjectResponse extends SpeakeasyBase {
    archived?: boolean;
    color?: ProjectResponseColorEnum;
    createdAt?: Date;
    currentStatus?: ProjectResponseCurrentStatus;
    customFieldSettings?: CustomFieldSettingCompact[];
    customFields?: CustomFieldCompact[];
    defaultView?: ProjectResponseDefaultViewEnum;
    dueDate?: Date;
    dueOn?: Date;
    followers?: UserCompact[];
    gid?: string;
    htmlNotes?: string;
    icon?: ProjectResponseIconEnum;
    isTemplate?: boolean;
    members?: UserCompact[];
    modifiedAt?: Date;
    name?: string;
    notes?: string;
    owner?: ProjectResponseOwner;
    permalinkUrl?: string;
    public?: boolean;
    resourceType?: string;
    startOn?: Date;
    team?: ProjectResponseTeam;
    workspace?: ProjectResponseWorkspace;
}
