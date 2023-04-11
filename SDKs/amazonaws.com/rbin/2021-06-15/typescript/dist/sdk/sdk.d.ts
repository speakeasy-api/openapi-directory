import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://rbin.{region}.amazonaws.com", "https://rbin.{region}.amazonaws.com", "http://rbin.{region}.amazonaws.com.cn", "https://rbin.{region}.amazonaws.com.cn"];
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
 * <p>This is the <i>Recycle Bin API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in Recycle Bin.</p> <p>Recycle Bin is a resource recovery feature that enables you to restore accidentally deleted snapshots and EBS-backed AMIs. When using Recycle Bin, if your resources are deleted, they are retained in the Recycle Bin for a time period that you specify.</p> <p>You can restore a resource from the Recycle Bin at any time before its retention period expires. After you restore a resource from the Recycle Bin, the resource is removed from the Recycle Bin, and you can then use it in the same way you use any other resource of that type in your account. If the retention period expires and the resource is not restored, the resource is permanently deleted from the Recycle Bin and is no longer available for recovery. For more information about Recycle Bin, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-recycle-bin.html"> Recycle Bin</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/rbin/} - Amazon Web Services documentation
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
     * Creates a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-create-rule"> Create Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
     */
    createRule(req: operations.CreateRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateRuleResponse>;
    /**
     * Deletes a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-delete-rule"> Delete Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
     */
    deleteRule(req: operations.DeleteRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRuleResponse>;
    /**
     * Gets information about a Recycle Bin retention rule.
     */
    getRule(req: operations.GetRuleRequest, config?: AxiosRequestConfig): Promise<operations.GetRuleResponse>;
    /**
     * Lists the Recycle Bin retention rules in the Region.
     */
    listRules(req: operations.ListRulesRequest, config?: AxiosRequestConfig): Promise<operations.ListRulesResponse>;
    /**
     * Lists the tags assigned to a retention rule.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Locks a retention rule. A locked retention rule can't be modified or deleted.
     */
    lockRule(req: operations.LockRuleRequest, config?: AxiosRequestConfig): Promise<operations.LockRuleResponse>;
    /**
     * Assigns tags to the specified retention rule.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Unlocks a retention rule. After a retention rule is unlocked, it can be modified or deleted only after the unlock delay period expires.
     */
    unlockRule(req: operations.UnlockRuleRequest, config?: AxiosRequestConfig): Promise<operations.UnlockRuleResponse>;
    /**
     * Unassigns a tag from a retention rule.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates an existing Recycle Bin retention rule. You can update a retention rule's description, resource tags, and retention period at any time after creation. You can't update a retention rule's resource type after creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-update-rule"> Update Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
     */
    updateRule(req: operations.UpdateRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRuleResponse>;
}
