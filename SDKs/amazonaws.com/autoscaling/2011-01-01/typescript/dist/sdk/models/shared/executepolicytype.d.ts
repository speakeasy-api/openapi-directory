import { SpeakeasyBase } from "../../../internal/utils";
export declare class ExecutePolicyType extends SpeakeasyBase {
    autoScalingGroupName?: string;
    breachThreshold?: number;
    honorCooldown?: boolean;
    metricValue?: number;
    policyName: string;
}
