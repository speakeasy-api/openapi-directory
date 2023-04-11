import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Registry artifacts can be collected together using groups. This section includes all of the primary operations related to groups.
 */
export declare class Groups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a new group
     *
     * @remarks
     * Creates a new group.
     *
     * This operation can fail for the following reasons:
     *
     * * A server error occurred (HTTP error `500`)
     * * The group already exist (HTTP error `409`)
     *
     */
    createGroup(req: shared.CreateGroupMetaData, config?: AxiosRequestConfig): Promise<operations.CreateGroupResponse>;
    /**
     * Delete a group by the specified ID.
     *
     * @remarks
     * Deletes a group by identifier.
     *
     * This operation can fail for the following reasons:
     *
     * * A server error occurred (HTTP error `500`)
     * * The group does not exist (HTTP error `404`)
     *
     */
    deleteGroupById(req: operations.DeleteGroupByIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupByIdResponse>;
    /**
     * Get a group by the specified ID.
     *
     * @remarks
     * Returns a group using the specified id.
     *
     * This operation can fail for the following reasons:
     *
     * * No group exists with the specified ID (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     */
    getGroupById(req: operations.GetGroupByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupByIdResponse>;
    /**
     * List groups
     *
     * @remarks
     * Returns a list of all groups.  This list is paged.
     */
    listGroups(req: operations.ListGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListGroupsResponse>;
}
