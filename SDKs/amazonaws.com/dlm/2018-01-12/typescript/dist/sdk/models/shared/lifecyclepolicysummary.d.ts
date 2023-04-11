import { SpeakeasyBase } from "../../../internal/utils";
import { GettablePolicyStateValuesEnum } from "./gettablepolicystatevaluesenum";
import { PolicyTypeValuesEnum } from "./policytypevaluesenum";
/**
 * Summary information about a lifecycle policy.
 */
export declare class LifecyclePolicySummary extends SpeakeasyBase {
    description?: string;
    policyId?: string;
    policyType?: PolicyTypeValuesEnum;
    state?: GettablePolicyStateValuesEnum;
    tags?: Record<string, string>;
}
