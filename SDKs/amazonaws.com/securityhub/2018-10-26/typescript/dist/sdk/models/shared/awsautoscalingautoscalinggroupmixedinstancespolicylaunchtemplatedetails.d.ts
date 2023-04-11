import { SpeakeasyBase } from "../../../internal/utils";
import { AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification } from "./awsautoscalingautoscalinggroupmixedinstancespolicylaunchtemplatelaunchtemplatespecification";
import { AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails } from "./awsautoscalingautoscalinggroupmixedinstancespolicylaunchtemplateoverrideslistdetails";
/**
 * Describes a launch template and overrides for a mixed instances policy.
 */
export declare class AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails extends SpeakeasyBase {
    launchTemplateSpecification?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification;
    overrides?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails[];
}
