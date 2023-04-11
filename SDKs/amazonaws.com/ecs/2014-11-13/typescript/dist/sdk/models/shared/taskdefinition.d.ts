import { SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
import { CompatibilityEnum } from "./compatibilityenum";
import { ContainerDefinition } from "./containerdefinition";
import { EphemeralStorage } from "./ephemeralstorage";
import { InferenceAccelerator } from "./inferenceaccelerator";
import { IpcModeEnum } from "./ipcmodeenum";
import { NetworkModeEnum } from "./networkmodeenum";
import { PidModeEnum } from "./pidmodeenum";
import { ProxyConfiguration } from "./proxyconfiguration";
import { RuntimePlatform } from "./runtimeplatform";
import { TaskDefinitionPlacementConstraint } from "./taskdefinitionplacementconstraint";
import { TaskDefinitionStatusEnum } from "./taskdefinitionstatusenum";
import { Volume } from "./volume";
/**
 * The details of a task definition which describes the container and volume definitions of an Amazon Elastic Container Service task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task.
 */
export declare class TaskDefinition extends SpeakeasyBase {
    compatibilities?: CompatibilityEnum[];
    containerDefinitions?: ContainerDefinition[];
    cpu?: string;
    deregisteredAt?: Date;
    ephemeralStorage?: EphemeralStorage;
    executionRoleArn?: string;
    family?: string;
    inferenceAccelerators?: InferenceAccelerator[];
    ipcMode?: IpcModeEnum;
    memory?: string;
    networkMode?: NetworkModeEnum;
    pidMode?: PidModeEnum;
    placementConstraints?: TaskDefinitionPlacementConstraint[];
    proxyConfiguration?: ProxyConfiguration;
    registeredAt?: Date;
    registeredBy?: string;
    requiresAttributes?: Attribute[];
    requiresCompatibilities?: CompatibilityEnum[];
    revision?: number;
    runtimePlatform?: RuntimePlatform;
    status?: TaskDefinitionStatusEnum;
    taskDefinitionArn?: string;
    taskRoleArn?: string;
    volumes?: Volume[];
}
