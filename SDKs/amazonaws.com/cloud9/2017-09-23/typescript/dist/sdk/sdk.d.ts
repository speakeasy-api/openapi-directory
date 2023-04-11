import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://cloud9.{region}.amazonaws.com", "https://cloud9.{region}.amazonaws.com", "http://cloud9.{region}.amazonaws.com.cn", "https://cloud9.{region}.amazonaws.com.cn"];
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
 * <fullname>Cloud9</fullname> <p>Cloud9 is a collection of tools that you can use to code, build, run, test, debug, and release software in the cloud.</p> <p>For more information about Cloud9, see the <a href="https://docs.aws.amazon.com/cloud9/latest/user-guide">Cloud9 User Guide</a>.</p> <p>Cloud9 supports these operations:</p> <ul> <li> <p> <code>CreateEnvironmentEC2</code>: Creates an Cloud9 development environment, launches an Amazon EC2 instance, and then connects from the instance to the environment.</p> </li> <li> <p> <code>CreateEnvironmentMembership</code>: Adds an environment member to an environment.</p> </li> <li> <p> <code>DeleteEnvironment</code>: Deletes an environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.</p> </li> <li> <p> <code>DeleteEnvironmentMembership</code>: Deletes an environment member from an environment.</p> </li> <li> <p> <code>DescribeEnvironmentMemberships</code>: Gets information about environment members for an environment.</p> </li> <li> <p> <code>DescribeEnvironments</code>: Gets information about environments.</p> </li> <li> <p> <code>DescribeEnvironmentStatus</code>: Gets status information for an environment.</p> </li> <li> <p> <code>ListEnvironments</code>: Gets a list of environment identifiers.</p> </li> <li> <p> <code>ListTagsForResource</code>: Gets the tags for an environment.</p> </li> <li> <p> <code>TagResource</code>: Adds tags to an environment.</p> </li> <li> <p> <code>UntagResource</code>: Removes tags from an environment.</p> </li> <li> <p> <code>UpdateEnvironment</code>: Changes the settings of an existing environment.</p> </li> <li> <p> <code>UpdateEnvironmentMembership</code>: Changes the settings of an existing environment member for an environment.</p> </li> </ul>
 *
 * @see {@link https://docs.aws.amazon.com/cloud9/} - Amazon Web Services documentation
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
     * Creates an Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.
     */
    createEnvironmentEc2(req: operations.CreateEnvironmentEc2Request, config?: AxiosRequestConfig): Promise<operations.CreateEnvironmentEc2Response>;
    /**
     * Adds an environment member to an Cloud9 development environment.
     */
    createEnvironmentMembership(req: operations.CreateEnvironmentMembershipRequest, config?: AxiosRequestConfig): Promise<operations.CreateEnvironmentMembershipResponse>;
    /**
     * Deletes an Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.
     */
    deleteEnvironment(req: operations.DeleteEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEnvironmentResponse>;
    /**
     * Deletes an environment member from a development environment.
     */
    deleteEnvironmentMembership(req: operations.DeleteEnvironmentMembershipRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEnvironmentMembershipResponse>;
    /**
     * Gets information about environment members for an Cloud9 development environment.
     */
    describeEnvironmentMemberships(req: operations.DescribeEnvironmentMembershipsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEnvironmentMembershipsResponse>;
    /**
     * Gets status information for an Cloud9 development environment.
     */
    describeEnvironmentStatus(req: operations.DescribeEnvironmentStatusRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEnvironmentStatusResponse>;
    /**
     * Gets information about Cloud9 development environments.
     */
    describeEnvironments(req: operations.DescribeEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEnvironmentsResponse>;
    /**
     * Gets a list of Cloud9 development environment identifiers.
     */
    listEnvironments(req: operations.ListEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListEnvironmentsResponse>;
    /**
     * Gets a list of the tags associated with an Cloud9 development environment.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * <p>Adds tags to an Cloud9 development environment.</p> <important> <p>Tags that you add to an Cloud9 environment by using this method will NOT be automatically propagated to underlying resources.</p> </important>
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes tags from an Cloud9 development environment.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Changes the settings of an existing Cloud9 development environment.
     */
    updateEnvironment(req: operations.UpdateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnvironmentResponse>;
    /**
     * Changes the settings of an existing environment member for an Cloud9 development environment.
     */
    updateEnvironmentMembership(req: operations.UpdateEnvironmentMembershipRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnvironmentMembershipResponse>;
}
