import { SpeakeasyBase } from "../../../internal/utils";
import { PredictiveScalingConfiguration } from "./predictivescalingconfiguration";
import { StepAdjustment } from "./stepadjustment";
import { TargetTrackingConfiguration } from "./targettrackingconfiguration";
export declare class PutScalingPolicyType extends SpeakeasyBase {
    adjustmentType?: string;
    autoScalingGroupName: string;
    cooldown?: number;
    enabled?: boolean;
    estimatedInstanceWarmup?: number;
    metricAggregationType?: string;
    minAdjustmentMagnitude?: number;
    minAdjustmentStep?: number;
    policyName: string;
    policyType?: string;
    predictiveScalingConfiguration?: PredictiveScalingConfiguration;
    scalingAdjustment?: number;
    stepAdjustments?: StepAdjustment[];
    targetTrackingConfiguration?: TargetTrackingConfiguration;
}
