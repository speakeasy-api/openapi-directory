import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { CustomFieldSettingCompact } from "./customfieldsettingcompact";
import { CustomFieldCompact } from "./customfieldcompact";


export enum ProjectResponseColorEnum {
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

export enum ProjectResponseCurrentStatusColorEnum {
    Green = "green",
    Yellow = "yellow",
    Red = "red",
    Blue = "blue"
}


// ProjectResponseCurrentStatus
/** 
 * A *project status* is an update on the progress of a particular project, and is sent out to all project followers when created. These updates include both text describing the update and a color code intended to represent the overall state of the project: "green" for projects that are on track, "yellow" for projects at risk, and "red" for projects that are behind.
**/
export class ProjectResponseCurrentStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: UserCompact;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color: ProjectResponseCurrentStatusColorEnum;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: UserCompact;

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=html_text" })
  htmlText?: string;

  @SpeakeasyMetadata({ data: "json, name=modified_at" })
  modifiedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}

export enum ProjectResponseDefaultViewEnum {
    List = "list",
    Board = "board",
    Calendar = "calendar",
    Timeline = "timeline"
}

export enum ProjectResponseIconEnum {
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


// ProjectResponseOwner
/** 
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
**/
export class ProjectResponseOwner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


// ProjectResponseTeam
/** 
 * *Create-only*. The team that this project is shared with. This field only exists for projects in organizations.
**/
export class ProjectResponseTeam extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


// ProjectResponseWorkspace
/** 
 * *Create-only*. The workspace or organization this project is associated with. Once created, projects cannot be moved to a different workspace. This attribute can only be specified at creation time.
**/
export class ProjectResponseWorkspace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


// ProjectResponse
/** 
 * A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
**/
export class ProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: ProjectResponseColorEnum;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=current_status" })
  currentStatus?: ProjectResponseCurrentStatus;

  @SpeakeasyMetadata({ data: "json, name=custom_field_settings", elemType: CustomFieldSettingCompact })
  customFieldSettings?: CustomFieldSettingCompact[];

  @SpeakeasyMetadata({ data: "json, name=custom_fields", elemType: CustomFieldCompact })
  customFields?: CustomFieldCompact[];

  @SpeakeasyMetadata({ data: "json, name=default_view" })
  defaultView?: ProjectResponseDefaultViewEnum;

  @SpeakeasyMetadata({ data: "json, name=due_date" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=due_on" })
  dueOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=followers", elemType: UserCompact })
  followers?: UserCompact[];

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=html_notes" })
  htmlNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=icon" })
  icon?: ProjectResponseIconEnum;

  @SpeakeasyMetadata({ data: "json, name=is_template" })
  isTemplate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=members", elemType: UserCompact })
  members?: UserCompact[];

  @SpeakeasyMetadata({ data: "json, name=modified_at" })
  modifiedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: ProjectResponseOwner;

  @SpeakeasyMetadata({ data: "json, name=permalink_url" })
  permalinkUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=start_on" })
  startOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: ProjectResponseTeam;

  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: ProjectResponseWorkspace;
}
