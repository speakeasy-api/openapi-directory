import { SpeakeasyBase } from "../../../internal/utils";
import { EnabledMetric } from "./enabledmetric";
import { Instance } from "./instance";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
import { MixedInstancesPolicy } from "./mixedinstancespolicy";
import { SuspendedProcess } from "./suspendedprocess";
import { TagDescription } from "./tagdescription";
import { TrafficSourceIdentifier } from "./trafficsourceidentifier";
import { WarmPoolConfiguration } from "./warmpoolconfiguration";
/**
 * Describes an Auto Scaling group.
 */
export declare class AutoScalingGroup extends SpeakeasyBase {
    autoScalingGroupARN?: string;
    autoScalingGroupName: string;
    availabilityZones: string[];
    capacityRebalance?: boolean;
    context?: string;
    createdTime: Date;
    defaultCooldown: number;
    defaultInstanceWarmup?: number;
    desiredCapacity: number;
    desiredCapacityType?: string;
    enabledMetrics?: EnabledMetric[];
    healthCheckGracePeriod?: number;
    healthCheckType: string;
    instances?: Instance[];
    launchConfigurationName?: string;
    launchTemplate?: LaunchTemplateSpecification;
    loadBalancerNames?: string[];
    maxInstanceLifetime?: number;
    maxSize: number;
    minSize: number;
    mixedInstancesPolicy?: MixedInstancesPolicy;
    newInstancesProtectedFromScaleIn?: boolean;
    placementGroup?: string;
    predictedCapacity?: number;
    serviceLinkedRoleARN?: string;
    status?: string;
    suspendedProcesses?: SuspendedProcess[];
    tags?: TagDescription[];
    targetGroupARNs?: string[];
    terminationPolicies?: string[];
    trafficSources?: TrafficSourceIdentifier[];
    vpcZoneIdentifier?: string;
    warmPoolConfiguration?: WarmPoolConfiguration;
    warmPoolSize?: number;
}
