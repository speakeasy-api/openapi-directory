import { SpeakeasyBase } from "../../../internal/utils";
import { ComparisonOperatorTypeEnum } from "./comparisonoperatortypeenum";
import { LocationUpdateStatusEnum } from "./locationupdatestatusenum";
import { MetricNameEnum } from "./metricnameenum";
import { PolicyTypeEnum } from "./policytypeenum";
import { ScalingAdjustmentTypeEnum } from "./scalingadjustmenttypeenum";
import { ScalingStatusTypeEnum } from "./scalingstatustypeenum";
import { TargetConfiguration } from "./targetconfiguration";
/**
 * Rule that controls how a fleet is scaled. Scaling policies are uniquely identified by the combination of name and fleet ID.
 */
export declare class ScalingPolicy extends SpeakeasyBase {
    comparisonOperator?: ComparisonOperatorTypeEnum;
    evaluationPeriods?: number;
    fleetArn?: string;
    fleetId?: string;
    location?: string;
    metricName?: MetricNameEnum;
    name?: string;
    policyType?: PolicyTypeEnum;
    scalingAdjustment?: number;
    scalingAdjustmentType?: ScalingAdjustmentTypeEnum;
    status?: ScalingStatusTypeEnum;
    targetConfiguration?: TargetConfiguration;
    threshold?: number;
    updateStatus?: LocationUpdateStatusEnum;
}
