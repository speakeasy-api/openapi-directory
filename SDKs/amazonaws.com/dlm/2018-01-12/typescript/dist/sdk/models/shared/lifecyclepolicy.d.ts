import { SpeakeasyBase } from "../../../internal/utils";
import { GettablePolicyStateValuesEnum } from "./gettablepolicystatevaluesenum";
import { PolicyDetails } from "./policydetails";
/**
 *  <b>[All policy types]</b> Detailed information about a snapshot, AMI, or event-based lifecycle policy.
 */
export declare class LifecyclePolicy extends SpeakeasyBase {
    dateCreated?: Date;
    dateModified?: Date;
    description?: string;
    executionRoleArn?: string;
    policyArn?: string;
    policyDetails?: PolicyDetails;
    policyId?: string;
    state?: GettablePolicyStateValuesEnum;
    statusMessage?: string;
    tags?: Record<string, string>;
}
