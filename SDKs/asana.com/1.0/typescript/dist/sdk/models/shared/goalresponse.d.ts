import { SpeakeasyBase } from "../../../internal/utils";
import { Like } from "./like";
import { UserCompact } from "./usercompact";
/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 *
 * @remarks
 * The `resource_subtype`s for `status` objects represent the type of their parent.
 */
export declare enum GoalResponseCurrentStatusUpdateResourceSubtypeEnum {
    ProjectStatusUpdate = "project_status_update",
    PortfolioStatusUpdate = "portfolio_status_update",
    GoalStatusUpdate = "goal_status_update"
}
/**
 * A *status update* is an update on the progress of a particular project, portfolio, or goal, and is sent out to all of its parent's followers when created. These updates include both text describing the update and a `status_type` intended to represent the overall state of the project.
 */
export declare class GoalResponseCurrentStatusUpdate extends SpeakeasyBase {
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
    resourceSubtype?: GoalResponseCurrentStatusUpdateResourceSubtypeEnum;
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
 * This field defines how the progress value of a goal metric is being calculated. A goal's progress can be provided manually by the user, calculated automatically from contributing subgoals or projects, or managed by an integration with an external data source, such as Salesforce.
 */
export declare enum GoalResponseMetricProgressSourceEnum {
    Manual = "manual",
    SubgoalProgress = "subgoal_progress",
    ProjectTaskCompletion = "project_task_completion",
    ProjectMilestoneCompletion = "project_milestone_completion",
    External = "external"
}
/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 */
export declare enum GoalResponseMetricResourceSubtypeEnum {
    Number = "number"
}
/**
 * A supported unit of measure for the goal metric, or none.
 */
export declare enum GoalResponseMetricUnitEnum {
    None = "none",
    Currency = "currency",
    Percentage = "percentage"
}
/**
 * A generic Asana Resource, containing a globally unique identifier.
 */
export declare class GoalResponseMetric extends SpeakeasyBase {
    /**
     * *Conditional*. Only relevant for `progress_source` of type `external`. This boolean indicates whether the requester has the ability to update the current value of this metric. This returns `true` if the external metric was created by the requester, `false` otherwise.
     */
    canManage?: boolean;
    /**
     * ISO 4217 currency code to format this custom field. This will be null if the `unit` is not `currency`.
     */
    currencyCode?: string;
    /**
     * This string is the current value of a goal metric of type string.
     */
    currentDisplayValue?: string;
    /**
     * This number is the current value of a goal metric of type number.
     */
    currentNumberValue?: number;
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * This number is the start value of a goal metric of type number.
     */
    initialNumberValue?: number;
    /**
     * *Conditional*. Only relevant for goal metrics of type ‘Number’. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive.
     *
     * @remarks
     * For percentage format, this may be unintuitive, as a value of 0.25 has a precision of 0, while a value of 0.251 has a precision of 1. This is due to 0.25 being displayed as 25%.
     */
    precision?: number;
    /**
     * This field defines how the progress value of a goal metric is being calculated. A goal's progress can be provided manually by the user, calculated automatically from contributing subgoals or projects, or managed by an integration with an external data source, such as Salesforce.
     */
    progressSource?: GoalResponseMetricProgressSourceEnum;
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     */
    resourceSubtype?: GoalResponseMetricResourceSubtypeEnum;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * This number is the end value of a goal metric of type number. This number cannot equal `initial_number_value`.
     */
    targetNumberValue?: number;
    /**
     * A supported unit of measure for the goal metric, or none.
     */
    unit?: GoalResponseMetricUnitEnum;
}
/**
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
 */
export declare class GoalResponseOwner extends SpeakeasyBase {
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
 * A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
 */
export declare class GoalResponseTeam extends SpeakeasyBase {
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
 * The cadence and index of the time period. The value is one of: `FY`, `H1`, `H2`, `Q1`, `Q2`, `Q3`, or `Q4`.
 */
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
 */
export declare class GoalResponseTimePeriod extends SpeakeasyBase {
    /**
     * A string representing the cadence code and the fiscal year.
     */
    displayName?: string;
    /**
     * The localized end date of the time period in `YYYY-MM-DD` format.
     */
    endOn?: string;
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The cadence and index of the time period. The value is one of: `FY`, `H1`, `H2`, `Q1`, `Q2`, `Q3`, or `Q4`.
     */
    period?: GoalResponseTimePeriodPeriodEnum;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * The localized start date of the time period in `YYYY-MM-DD` format.
     */
    startOn?: string;
}
/**
 * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
 */
export declare class GoalResponseWorkspace extends SpeakeasyBase {
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
 * A generic Asana Resource, containing a globally unique identifier.
 */
export declare class GoalResponse extends SpeakeasyBase {
    /**
     * The latest `status_update` posted to this goal.
     */
    currentStatusUpdate?: GoalResponseCurrentStatusUpdate;
    /**
     * The localized day on which this goal is due. This takes a date with format `YYYY-MM-DD`.
     */
    dueOn?: string;
    /**
     * Array of users who are members of this goal.
     */
    followers?: UserCompact[];
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The notes of the goal with formatting as HTML.
     */
    htmlNotes?: string;
    /**
     * *Conditional*. This property is only present when the `workspace` provided is an organization. Whether the goal belongs to the `workspace` (and is listed as part of the workspace’s goals) or not. If it isn’t a workspace-level goal, it is a team-level goal, and is associated with the goal’s team.
     */
    isWorkspaceLevel?: boolean;
    /**
     * True if the goal is liked by the authorized user, false if not.
     */
    liked?: boolean;
    /**
     * Array of likes for users who have liked this goal.
     */
    likes?: Like[];
    metric?: GoalResponseMetric;
    /**
     * The name of the goal.
     */
    name?: string;
    /**
     * Free-form textual information associated with the goal (i.e. its description).
     */
    notes?: string;
    /**
     * The number of users who have liked this goal.
     */
    numLikes?: number;
    owner?: GoalResponseOwner;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * The day on which work for this goal begins, or null if the goal has no start date. This takes a date with `YYYY-MM-DD` format, and cannot be set unless there is an accompanying due date.
     */
    startOn?: string;
    /**
     * The current status of this goal. When the goal is open, its status can be `green`, `yellow`, and `red` to reflect "On Track", "At Risk", and "Off Track", respectively. When the goal is closed, the value can be `missed`, `achieved`, `partial`, or `dropped`.
     *
     * @remarks
     * *Note* you can only write to this property if `metric` is set.
     */
    status?: string;
    /**
     * *Conditional*. This property is only present when the `workspace` provided is an organization.
     */
    team?: GoalResponseTeam;
    timePeriod?: GoalResponseTimePeriod;
    workspace?: GoalResponseWorkspace;
}
