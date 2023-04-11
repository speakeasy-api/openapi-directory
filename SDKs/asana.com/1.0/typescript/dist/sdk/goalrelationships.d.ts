import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A goal relationship is an object representing the relationship between a goal and another goal, a project, or a portfolio.
 */
export declare class GoalRelationships {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a supporting goal relationship
     *
     * @remarks
     * Creates a goal relationship by adding a supporting resource to a given goal.
     *
     * Returns the newly created goal relationship record.
     */
    addSupportingRelationship(req: operations.AddSupportingRelationshipRequest, config?: AxiosRequestConfig): Promise<operations.AddSupportingRelationshipResponse>;
    /**
     * Get a goal relationship
     *
     * @remarks
     * Returns the complete updated goal relationship record for a single goal relationship.
     */
    getGoalRelationship(req: operations.GetGoalRelationshipRequest, config?: AxiosRequestConfig): Promise<operations.GetGoalRelationshipResponse>;
    /**
     * Get goal relationships
     *
     * @remarks
     * Returns compact goal relationship records.
     */
    getGoalRelationships(req: operations.GetGoalRelationshipsRequest, config?: AxiosRequestConfig): Promise<operations.GetGoalRelationshipsResponse>;
    /**
     * Removes a supporting goal relationship
     *
     * @remarks
     * Removes a goal relationship for a given parent goal.
     */
    removeSupportingRelationship(req: operations.RemoveSupportingRelationshipRequest, config?: AxiosRequestConfig): Promise<operations.RemoveSupportingRelationshipResponse>;
    /**
     * Update a goal relationship
     *
     * @remarks
     * An existing goal relationship can be updated by making a PUT request on the URL for
     * that goal relationship. Only the fields provided in the `data` block will be updated;
     * any unspecified fields will remain unchanged.
     *
     * Returns the complete updated goal relationship record.
     */
    updateGoalRelationship(req: operations.UpdateGoalRelationshipRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGoalRelationshipResponse>;
}
