import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the runtime system, policy definition, and whether debug logging enabled. You can specify the following CustomPolicyDetails parameter values only for Config Custom Policy rules.
 */
export declare class CustomPolicyDetails extends SpeakeasyBase {
    enableDebugLogDelivery?: boolean;
    policyRuntime: string;
    policyText: string;
}
