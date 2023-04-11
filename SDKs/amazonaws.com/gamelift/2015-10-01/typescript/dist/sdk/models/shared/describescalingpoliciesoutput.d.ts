import { SpeakeasyBase } from "../../../internal/utils";
import { ScalingPolicy } from "./scalingpolicy";
/**
 * Success
 */
export declare class DescribeScalingPoliciesOutput extends SpeakeasyBase {
    nextToken?: string;
    scalingPolicies?: ScalingPolicy[];
}
