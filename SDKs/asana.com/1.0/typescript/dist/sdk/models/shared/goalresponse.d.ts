import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { Like } from "./like";
export declare enum GoalResponseMetricResourceSubtypeEnum {
    Number = "number"
}
export declare enum GoalResponseMetricUnitEnum {
    None = "none",
    Currency = "currency",
    Percentage = "percentage"
}
/**
 * A generic Asana Resource, containing a globally unique identifier.
**/
export declare class GoalResponseMetric extends SpeakeasyBase {
    currencyCode?: string;
    currentDisplayValue?: string;
    currentNumberValue?: number;
    gid?: string;
    initialNumberValue?: number;
    precision?: number;
    resourceSubtype?: GoalResponseMetricResourceSubtypeEnum;
    resourceType?: string;
    targetNumberValue?: number;
    unit?: GoalResponseMetricUnitEnum;
}
/**
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
**/
export declare class GoalResponseOwner extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
/**
 * A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
**/
export declare class GoalResponseTeam extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
export declare enum GoalResponseTimePeriodPeriodEnum {
    Fy = "FY",
    H1 = "H1",
    H2 = "H2",
    Q1 = "Q1",
    Q2 = "Q2",
    Q3 = "Q3",
    Q4 = "Q4"
}
/**
 * A generic Asana Resource, containing a globally unique identifier.
**/
export declare class GoalResponseTimePeriod extends SpeakeasyBase {
    endOn?: string;
    gid?: string;
    period?: GoalResponseTimePeriodPeriodEnum;
    resourceType?: string;
    startOn?: string;
}
/**
 * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
**/
export declare class GoalResponseWorkspace extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
/**
 * A generic Asana Resource, containing a globally unique identifier.
**/
export declare class GoalResponse extends SpeakeasyBase {
    dueOn?: string;
    followers?: UserCompact[];
    gid?: string;
    htmlNotes?: string;
    isWorkspaceLevel?: boolean;
    liked?: boolean;
    likes?: Like[];
    metric?: GoalResponseMetric;
    name?: string;
    notes?: string;
    numLikes?: number;
    owner?: GoalResponseOwner;
    resourceType?: string;
    startOn?: string;
    status?: string;
    team?: GoalResponseTeam;
    timePeriod?: GoalResponseTimePeriod;
    workspace?: GoalResponseWorkspace;
}
