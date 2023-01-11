import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
export declare const ServerList: readonly ["http://identitystore.{region}.amazonaws.com", "https://identitystore.{region}.amazonaws.com", "http://identitystore.{region}.amazonaws.com.cn", "https://identitystore.{region}.amazonaws.com.cn"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * describeGroup - Retrieves the group metadata and attributes from <code>GroupId</code> in an identity store.
    **/
    describeGroup(req: operations.DescribeGroupRequest, config?: AxiosRequestConfig): Promise<operations.DescribeGroupResponse>;
    /**
     * describeUser - Retrieves the user metadata and attributes from <code>UserId</code> in an identity store.
    **/
    describeUser(req: operations.DescribeUserRequest, config?: AxiosRequestConfig): Promise<operations.DescribeUserResponse>;
    /**
     * listGroups - Lists the attribute name and value of the group that you specified in the search. We only support <code>DisplayName</code> as a valid filter attribute path currently, and filter is required. This API returns minimum attributes, including <code>GroupId</code> and group <code>DisplayName</code> in the response.
    **/
    listGroups(req: operations.ListGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListGroupsResponse>;
    /**
     * listUsers - Lists the attribute name and value of the user that you specified in the search. We only support <code>UserName</code> as a valid filter attribute path currently, and filter is required. This API returns minimum attributes, including <code>UserId</code> and <code>UserName</code> in the response.
    **/
    listUsers(req: operations.ListUsersRequest, config?: AxiosRequestConfig): Promise<operations.ListUsersResponse>;
}
