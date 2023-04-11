import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, <code>OpsItemGroup</code> is the only resource that supports Systems Manager resource policies. The resource policy for <code>OpsItemGroup</code> enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).
 */
export declare class GetResourcePoliciesResponseEntry extends SpeakeasyBase {
    policy?: string;
    policyHash?: string;
    policyId?: string;
}
