import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A goal is an object in the goal-tracking system that helps your organization drive measurable results.
 */
export declare class Goals {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a collaborator to a goal
     *
     * @remarks
     * Adds followers to a goal. Returns the goal the followers were added to.
     * Each goal can be associated with zero or more followers in the system.
     * Requests to add/remove followers, if successful, will return the complete updated goal record, described above.
     */
    addFollowers(req: operations.AddFollowersRequest, config?: AxiosRequestConfig): Promise<operations.AddFollowersResponse>;
    /**
     * Create a goal
     *
     * @remarks
     * Creates a new goal in a workspace or team.
     *
     * Returns the full record of the newly created goal.
     */
    createGoal(req: operations.CreateGoalRequest, config?: AxiosRequestConfig): Promise<operations.CreateGoalResponse>;
    /**
     * Create a goal metric
     *
     * @remarks
     * Creates and adds a goal metric to a specified goal. Note that this replaces an existing goal metric if one already exists.
     */
    createGoalMetric(req: operations.CreateGoalMetricRequest, config?: AxiosRequestConfig): Promise<operations.CreateGoalMetricResponse>;
    /**
     * Delete a goal
     *
     * @remarks
     * A specific, existing goal can be deleted by making a DELETE request on the URL for that goal.
     *
     * Returns an empty data record.
     */
    deleteGoal(req: operations.DeleteGoalRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGoalResponse>;
    /**
     * Get a goal
     *
     * @remarks
     * Returns the complete goal record for a single goal.
     */
    getGoal(req: operations.GetGoalRequest, config?: AxiosRequestConfig): Promise<operations.GetGoalResponse>;
    /**
     * Get goals
     *
     * @remarks
     * Returns compact goal records.
     */
    getGoals(req: operations.GetGoalsRequest, config?: AxiosRequestConfig): Promise<operations.GetGoalsResponse>;
    /**
     * Get parent goals from a goal
     *
     * @remarks
     * Returns a compact representation of all of the parent goals of a goal.
     */
    getParentGoalsForGoal(req: operations.GetParentGoalsForGoalRequest, config?: AxiosRequestConfig): Promise<operations.GetParentGoalsForGoalResponse>;
    /**
     * Remove a collaborator from a goal
     *
     * @remarks
     * Removes followers from a goal. Returns the goal the followers were removed from.
     * Each goal can be associated with zero or more followers in the system.
     * Requests to add/remove followers, if successful, will return the complete updated goal record, described above.
     */
    removeFollowers(req: operations.RemoveFollowersRequest, config?: AxiosRequestConfig): Promise<operations.RemoveFollowersResponse>;
    /**
     * Update a goal
     *
     * @remarks
     * An existing goal can be updated by making a PUT request on the URL for
     * that goal. Only the fields provided in the `data` block will be updated;
     * any unspecified fields will remain unchanged.
     *
     * Returns the complete updated goal record.
     */
    updateGoal(req: operations.UpdateGoalRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGoalResponse>;
    /**
     * Update a goal metric
     *
     * @remarks
     * Updates a goal's existing metric's `current_number_value` if one exists,
     * otherwise responds with a 400 status code.
     *
     * Returns the complete updated goal metric record.
     */
    updateGoalMetric(req: operations.UpdateGoalMetricRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGoalMetricResponse>;
}
