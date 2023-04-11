import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A user task list represents the tasks assigned to a particular user. This list is the user's [My Tasks](https://asana.com/guide/help/fundamentals/my-tasks) list.
 */
export declare class UserTaskLists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a user task list
     *
     * @remarks
     * Returns the full record for a user task list.
     */
    getUserTaskList(req: operations.GetUserTaskListRequest, config?: AxiosRequestConfig): Promise<operations.GetUserTaskListResponse>;
    /**
     * Get a user's task list
     *
     * @remarks
     * Returns the full record for a user's task list.
     */
    getUserTaskListForUser(req: operations.GetUserTaskListForUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserTaskListForUserResponse>;
}
