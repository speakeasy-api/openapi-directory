import { SpeakeasyBase } from "../../../internal/utils";
import { ScalingPlan } from "./scalingplan";
/**
 * Success
 */
export declare class DescribeScalingPlansResponse extends SpeakeasyBase {
    nextToken?: string;
    scalingPlans?: ScalingPlan[];
}
