import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingConfigurationEnum } from "./autoscalingconfigurationenum";
import { ContainerConfiguration } from "./containerconfiguration";
/**
 *  The Amazon ECS service configurations used for recommendations.
 */
export declare class ServiceConfiguration extends SpeakeasyBase {
    autoScalingConfiguration?: AutoScalingConfigurationEnum;
    containerConfigurations?: ContainerConfiguration[];
    cpu?: number;
    memory?: number;
    taskDefinitionArn?: string;
}
