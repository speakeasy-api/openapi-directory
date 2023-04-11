import { SpeakeasyBase } from "../../../internal/utils";
import { AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails } from "./awsautoscalingautoscalinggroupavailabilityzoneslistdetails";
import { AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification } from "./awsautoscalingautoscalinggrouplaunchtemplatelaunchtemplatespecification";
import { AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails } from "./awsautoscalingautoscalinggroupmixedinstancespolicydetails";
/**
 * Provides details about an auto scaling group.
 */
export declare class AwsAutoScalingAutoScalingGroupDetails extends SpeakeasyBase {
    availabilityZones?: AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails[];
    capacityRebalance?: boolean;
    createdTime?: string;
    healthCheckGracePeriod?: number;
    healthCheckType?: string;
    launchConfigurationName?: string;
    launchTemplate?: AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification;
    loadBalancerNames?: string[];
    mixedInstancesPolicy?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails;
}
