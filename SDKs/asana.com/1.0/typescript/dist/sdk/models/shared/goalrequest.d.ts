import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompactInput } from "./usercompact";
export declare enum GoalRequestMetricUnitEnum {
    None = "none",
    Currency = "currency",
    Percentage = "percentage"
}
/**
 * A generic Asana Resource, containing a globally unique identifier.
**/
export declare class GoalRequestMetricInput extends SpeakeasyBase {
    currencyCode?: string;
    currentDisplayValue?: string;
    currentNumberValue?: number;
    initialNumberValue?: number;
    precision?: number;
    targetNumberValue?: number;
    unit?: GoalRequestMetricUnitEnum;
}
/**
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
**/
export declare class GoalRequestOwnerInput extends SpeakeasyBase {
    name?: string;
}
/**
 * A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
**/
export declare class GoalRequestTeamInput extends SpeakeasyBase {
    name?: string;
}
export declare enum GoalRequestTimePeriodPeriodEnum {
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
export declare class GoalRequestTimePeriodInput extends SpeakeasyBase {
    endOn?: string;
    period?: GoalRequestTimePeriodPeriodEnum;
    startOn?: string;
}
/**
 * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
**/
export declare class GoalRequestWorkspaceInput extends SpeakeasyBase {
    name?: string;
}
/**
 * A generic Asana Resource, containing a globally unique identifier.
**/
export declare class GoalRequestInput extends SpeakeasyBase {
    dueOn?: string;
    followers?: UserCompactInput[];
    htmlNotes?: string;
    isWorkspaceLevel?: boolean;
    liked?: boolean;
    metric?: GoalRequestMetricInput;
    name?: string;
    notes?: string;
    owner?: GoalRequestOwnerInput;
    startOn?: string;
    status?: string;
    team?: GoalRequestTeamInput;
    timePeriod?: GoalRequestTimePeriodInput;
    workspace?: GoalRequestWorkspaceInput;
}
