import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This field defines how the progress value of a goal metric is being calculated. A goal's progress can be provided manually by the user, calculated automatically from contributing subgoals or projects, or managed by an integration with an external data source, such as Salesforce.
 */
export declare enum GoalMetricRequestProgressSourceEnum {
    Manual = "manual",
    SubgoalProgress = "subgoal_progress",
    ProjectTaskCompletion = "project_task_completion",
    ProjectMilestoneCompletion = "project_milestone_completion",
    External = "external"
}
/**
 * A supported unit of measure for the goal metric, or none.
 */
export declare enum GoalMetricRequestUnitEnum {
    None = "none",
    Currency = "currency",
    Percentage = "percentage"
}
/**
 * A generic Asana Resource, containing a globally unique identifier.
 */
export declare class GoalMetricRequestInput extends SpeakeasyBase {
    /**
     * ISO 4217 currency code to format this custom field. This will be null if the `unit` is not `currency`.
     */
    currencyCode?: string;
    /**
     * This number is the current value of a goal metric of type number.
     */
    currentNumberValue?: number;
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
    progressSource?: GoalMetricRequestProgressSourceEnum;
    /**
     * This number is the end value of a goal metric of type number. This number cannot equal `initial_number_value`.
     */
    targetNumberValue?: number;
    /**
     * A supported unit of measure for the goal metric, or none.
     */
    unit?: GoalMetricRequestUnitEnum;
}
