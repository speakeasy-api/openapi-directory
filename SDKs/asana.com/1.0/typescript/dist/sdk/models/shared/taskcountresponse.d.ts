import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A response object returned from the task count endpoint.
 */
export declare class TaskCountResponse extends SpeakeasyBase {
    /**
     * The number of completed milestones in a project.
     */
    numCompletedMilestones?: number;
    /**
     * The number of completed tasks in a project.
     */
    numCompletedTasks?: number;
    /**
     * The number of incomplete milestones in a project.
     */
    numIncompleteMilestones?: number;
    /**
     * The number of incomplete tasks in a project.
     */
    numIncompleteTasks?: number;
    /**
     * The number of milestones in a project.
     */
    numMilestones?: number;
    /**
     * The number of tasks in a project.
     */
    numTasks?: number;
}
