import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://migrationhub-config.{region}.amazonaws.com", "https://migrationhub-config.{region}.amazonaws.com", "http://migrationhub-config.{region}.amazonaws.com.cn", "https://migrationhub-config.{region}.amazonaws.com.cn"];
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
 * <p>The AWS Migration Hub home region APIs are available specifically for working with your Migration Hub home region. You can use these APIs to determine a home region, as well as to create and work with controls that describe the home region.</p> <ul> <li> <p>You must make API calls for write actions (create, notify, associate, disassociate, import, or put) while in your home region, or a <code>HomeRegionNotSetException</code> error is returned.</p> </li> <li> <p>API calls for read actions (list, describe, stop, and delete) are permitted outside of your home region.</p> </li> <li> <p>If you call a write API outside the home region, an <code>InvalidInputException</code> is returned.</p> </li> <li> <p>You can call <code>GetHomeRegion</code> action to obtain the account's Migration Hub home region.</p> </li> </ul> <p>For specific API usage, see the sections that follow in this AWS Migration Hub Home Region API reference. </p>
 *
 * @see {@link https://docs.aws.amazon.com/migrationhub-config/} - Amazon Web Services documentation
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
     * This API sets up the home region for the calling account only.
     */
    createHomeRegionControl(req: operations.CreateHomeRegionControlRequest, config?: AxiosRequestConfig): Promise<operations.CreateHomeRegionControlResponse>;
    /**
     * This API permits filtering on the <code>ControlId</code> and <code>HomeRegion</code> fields.
     */
    describeHomeRegionControls(req: operations.DescribeHomeRegionControlsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeHomeRegionControlsResponse>;
    /**
     * Returns the calling account’s home region, if configured. This API is used by other AWS services to determine the regional endpoint for calling AWS Application Discovery Service and Migration Hub. You must call <code>GetHomeRegion</code> at least once before you call any other AWS Application Discovery Service and AWS Migration Hub APIs, to obtain the account's Migration Hub home region.
     */
    getHomeRegion(req: operations.GetHomeRegionRequest, config?: AxiosRequestConfig): Promise<operations.GetHomeRegionResponse>;
}
