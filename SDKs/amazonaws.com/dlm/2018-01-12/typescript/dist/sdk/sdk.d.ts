import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://dlm.{region}.amazonaws.com", "https://dlm.{region}.amazonaws.com", "http://dlm.{region}.amazonaws.com.cn", "https://dlm.{region}.amazonaws.com.cn"];
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
 * <fullname>Amazon Data Lifecycle Manager</fullname> <p>With Amazon Data Lifecycle Manager, you can manage the lifecycle of your Amazon Web Services resources. You create lifecycle policies, which are used to automate operations on the specified resources.</p> <p>Amazon Data Lifecycle Manager supports Amazon EBS volumes and snapshots. For information about using Amazon Data Lifecycle Manager with Amazon EBS, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html"> Amazon Data Lifecycle Manager</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/dlm/} - Amazon Web Services documentation
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
     * Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can create up to 100 lifecycle policies.
     */
    createLifecyclePolicy(req: operations.CreateLifecyclePolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateLifecyclePolicyResponse>;
    /**
     * <p>Deletes the specified lifecycle policy and halts the automated operations that the policy specified.</p> <p>For more information about deleting a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#delete">Delete lifecycle policies</a>.</p>
     */
    deleteLifecyclePolicy(req: operations.DeleteLifecyclePolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLifecyclePolicyResponse>;
    /**
     * <p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
     */
    getLifecyclePolicies(req: operations.GetLifecyclePoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetLifecyclePoliciesResponse>;
    /**
     * Gets detailed information about the specified lifecycle policy.
     */
    getLifecyclePolicy(req: operations.GetLifecyclePolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetLifecyclePolicyResponse>;
    /**
     * Lists the tags for the specified resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Adds the specified tags to the specified resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes the specified tags from the specified resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * <p>Updates the specified lifecycle policy.</p> <p>For more information about updating a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#modify">Modify lifecycle policies</a>.</p>
     */
    updateLifecyclePolicy(req: operations.UpdateLifecyclePolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLifecyclePolicyResponse>;
}
