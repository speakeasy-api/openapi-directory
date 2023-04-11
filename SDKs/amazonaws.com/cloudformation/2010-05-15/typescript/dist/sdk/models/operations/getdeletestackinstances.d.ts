import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GETDeleteStackInstancesActionEnum {
    DeleteStackInstances = "DeleteStackInstances"
}
/**
 * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>
 */
export declare enum GETDeleteStackInstancesCallAsEnum {
    Self = "SELF",
    DelegatedAdmin = "DELEGATED_ADMIN"
}
/**
 * <p>[Service-managed permissions] The Organizations accounts to which StackSets deploys. StackSets doesn't deploy stack instances to the organization management account, even if the organization management account is in your organization or in an OU in your organization.</p> <p>For update operations, you can specify either <code>Accounts</code> or <code>OrganizationalUnitIds</code>. For create and delete operations, specify <code>OrganizationalUnitIds</code>.</p>
 */
export declare class GETDeleteStackInstancesDeploymentTargets extends SpeakeasyBase {
    accountFilterType?: shared.AccountFilterTypeEnum;
    accounts?: string[];
    accountsUrl?: string;
    organizationalUnitIds?: string[];
}
/**
 * <p>The user-specified preferences for how CloudFormation performs a stack set operation.</p> <p>For more information about maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
 */
export declare class GETDeleteStackInstancesOperationPreferences extends SpeakeasyBase {
    failureToleranceCount?: number;
    failureTolerancePercentage?: number;
    maxConcurrentCount?: number;
    maxConcurrentPercentage?: number;
    regionConcurrencyType?: shared.RegionConcurrencyTypeEnum;
    regionOrder?: string[];
}
export declare enum GETDeleteStackInstancesVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETDeleteStackInstancesRequest extends SpeakeasyBase {
    /**
     * <p>[Self-managed permissions] The names of the Amazon Web Services accounts that you want to delete stack instances for.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
     */
    accounts?: string[];
    action: GETDeleteStackInstancesActionEnum;
    /**
     * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>
     */
    callAs?: GETDeleteStackInstancesCallAsEnum;
    /**
     * <p>[Service-managed permissions] The Organizations accounts from which to delete stack instances.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
     */
    deploymentTargets?: GETDeleteStackInstancesDeploymentTargets;
    /**
     * <p>The unique identifier for this stack set operation.</p> <p>If you don't specify an operation ID, the SDK generates one automatically.</p> <p>The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You can retry stack set operation requests to ensure that CloudFormation successfully received them.</p> <p>Repeating this stack set operation with a new operation ID retries all stack instances whose status is <code>OUTDATED</code>.</p>
     */
    operationId?: string;
    /**
     * Preferences for how CloudFormation performs this stack set operation.
     */
    operationPreferences?: GETDeleteStackInstancesOperationPreferences;
    /**
     * The Amazon Web Services Regions where you want to delete stack set instances.
     */
    regions: string[];
    /**
     * <p>Removes the stack instances from the specified stack set, but doesn't delete the stacks. You can't reassociate a retained stack or add an existing, saved stack to a new stack set.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
     */
    retainStacks: boolean;
    /**
     * The name or unique ID of the stack set that you want to delete stack instances for.
     */
    stackSetName: string;
    version: GETDeleteStackInstancesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteStackInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
