import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Create and list assignments
 */
export declare class Assignment {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete this assignment and all of it's contributions
     */
    deleteAssignmentsId(req: operations.DeleteAssignmentsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAssignmentsIdResponse>;
    /**
     * List assignments
     */
    getAssignments(req: operations.GetAssignmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetAssignmentsResponse>;
    /**
     * Get a single assigment by id
     */
    getAssignmentsId(req: operations.GetAssignmentsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAssignmentsIdResponse>;
    /**
     * Create a new assignment
     */
    postAssignments(req: shared.AssignmentSubmission, config?: AxiosRequestConfig): Promise<operations.PostAssignmentsResponse>;
}
