import { SpeakeasyBase } from "../../../internal/utils";
import { AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails } from "./awsautoscalingautoscalinggroupmixedinstancespolicyinstancesdistributiondetails";
import { AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails } from "./awsautoscalingautoscalinggroupmixedinstancespolicylaunchtemplatedetails";
/**
 * The mixed instances policy for the automatic scaling group.
 */
export declare class AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails extends SpeakeasyBase {
    instancesDistribution?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails;
    launchTemplate?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails;
}
