import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://mobile.{region}.amazonaws.com", "https://mobile.{region}.amazonaws.com", "http://mobile.{region}.amazonaws.com.cn", "https://mobile.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 *  AWS Mobile Service provides mobile app and website developers with capabilities required to configure AWS resources and bootstrap their developer desktop projects with the necessary SDKs, constants, tools and samples to make use of those resources.
 *
 * @see {@link https://docs.aws.amazon.com/mobile/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     *  Creates an AWS Mobile Hub project.
     */
    createProject(req: operations.CreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectResponse>;
    /**
     *  Delets a project in AWS Mobile Hub.
     */
    deleteProject(req: operations.DeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     *  Get the bundle details for the requested bundle id.
     */
    describeBundle(req: operations.DescribeBundleRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBundleResponse>;
    /**
     *  Gets details about a project in AWS Mobile Hub.
     */
    describeProject(req: operations.DescribeProjectRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProjectResponse>;
    /**
     *  Generates customized software development kit (SDK) and or tool packages used to integrate mobile web or mobile app clients with backend AWS resources.
     */
    exportBundle(req: operations.ExportBundleRequest, config?: AxiosRequestConfig): Promise<operations.ExportBundleResponse>;
    /**
     *  Exports project configuration to a snapshot which can be downloaded and shared. Note that mobile app push credentials are encrypted in exported projects, so they can only be shared successfully within the same AWS account.
     */
    exportProject(req: operations.ExportProjectRequest, config?: AxiosRequestConfig): Promise<operations.ExportProjectResponse>;
    /**
     *  List all available bundles.
     */
    listBundles(req: operations.ListBundlesRequest, config?: AxiosRequestConfig): Promise<operations.ListBundlesResponse>;
    /**
     *  Lists projects in AWS Mobile Hub.
     */
    listProjects(req: operations.ListProjectsRequest, config?: AxiosRequestConfig): Promise<operations.ListProjectsResponse>;
    /**
     *  Update an existing project.
     */
    updateProject(req: operations.UpdateProjectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectResponse>;
}
