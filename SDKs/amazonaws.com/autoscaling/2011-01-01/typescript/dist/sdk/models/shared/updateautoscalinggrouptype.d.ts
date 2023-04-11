import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
import { MixedInstancesPolicy } from "./mixedinstancespolicy";
export declare class UpdateAutoScalingGroupType extends SpeakeasyBase {
    autoScalingGroupName: string;
    availabilityZones?: string[];
    capacityRebalance?: boolean;
    context?: string;
    defaultCooldown?: number;
    defaultInstanceWarmup?: number;
    desiredCapacity?: number;
    desiredCapacityType?: string;
    healthCheckGracePeriod?: number;
    healthCheckType?: string;
    launchConfigurationName?: string;
    launchTemplate?: LaunchTemplateSpecification;
    maxInstanceLifetime?: number;
    maxSize?: number;
    minSize?: number;
    mixedInstancesPolicy?: MixedInstancesPolicy;
    newInstancesProtectedFromScaleIn?: boolean;
    placementGroup?: string;
    serviceLinkedRoleARN?: string;
    terminationPolicies?: string[];
    vpcZoneIdentifier?: string;
}
