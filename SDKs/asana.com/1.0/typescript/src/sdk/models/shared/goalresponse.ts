import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { Like } from "./like";


export enum GoalResponseMetricResourceSubtypeEnum {
    Number = "number"
}

export enum GoalResponseMetricUnitEnum {
    None = "none",
    Currency = "currency",
    Percentage = "percentage"
}


// GoalResponseMetric
/** 
 * A generic Asana Resource, containing a globally unique identifier.
**/
export class GoalResponseMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency_code" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=current_display_value" })
  currentDisplayValue?: string;

  @SpeakeasyMetadata({ data: "json, name=current_number_value" })
  currentNumberValue?: number;

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=initial_number_value" })
  initialNumberValue?: number;

  @SpeakeasyMetadata({ data: "json, name=precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: GoalResponseMetricResourceSubtypeEnum;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=target_number_value" })
  targetNumberValue?: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: GoalResponseMetricUnitEnum;
}


// GoalResponseOwner
/** 
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
**/
export class GoalResponseOwner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


// GoalResponseTeam
/** 
 * A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
**/
export class GoalResponseTeam extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}

export enum GoalResponseTimePeriodPeriodEnum {
    Fy = "FY",
    H1 = "H1",
    H2 = "H2",
    Q1 = "Q1",
    Q2 = "Q2",
    Q3 = "Q3",
    Q4 = "Q4"
}


// GoalResponseTimePeriod
/** 
 * A generic Asana Resource, containing a globally unique identifier.
**/
export class GoalResponseTimePeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_on" })
  endOn?: string;

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: GoalResponseTimePeriodPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=start_on" })
  startOn?: string;
}


// GoalResponseWorkspace
/** 
 * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
**/
export class GoalResponseWorkspace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


// GoalResponse
/** 
 * A generic Asana Resource, containing a globally unique identifier.
**/
export class GoalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=due_on" })
  dueOn?: string;

  @SpeakeasyMetadata({ data: "json, name=followers", elemType: UserCompact })
  followers?: UserCompact[];

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=html_notes" })
  htmlNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=is_workspace_level" })
  isWorkspaceLevel?: boolean;

  @SpeakeasyMetadata({ data: "json, name=liked" })
  liked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=likes", elemType: Like })
  likes?: Like[];

  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric?: GoalResponseMetric;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=num_likes" })
  numLikes?: number;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: GoalResponseOwner;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=start_on" })
  startOn?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: GoalResponseTeam;

  @SpeakeasyMetadata({ data: "json, name=time_period" })
  timePeriod?: GoalResponseTimePeriod;

  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: GoalResponseWorkspace;
}
