import { SpeakeasyBase } from "../../../internal/utils";
import { EphemeralStorage } from "./ephemeralstorage";
import { FargatePlatformConfiguration } from "./fargateplatformconfiguration";
import { KeyValuePair } from "./keyvaluepair";
import { LinuxParameters } from "./linuxparameters";
import { LogConfiguration } from "./logconfiguration";
import { MountPoint } from "./mountpoint";
import { NetworkConfiguration } from "./networkconfiguration";
import { ResourceRequirement } from "./resourcerequirement";
import { Secret } from "./secret";
import { Ulimit } from "./ulimit";
import { Volume } from "./volume";
/**
 * Container properties are used for Amazon ECS based job definitions. These properties to describe the container that's launched as part of a job.
 */
export declare class ContainerProperties extends SpeakeasyBase {
    command?: string[];
    environment?: KeyValuePair[];
    ephemeralStorage?: EphemeralStorage;
    executionRoleArn?: string;
    fargatePlatformConfiguration?: FargatePlatformConfiguration;
    image?: string;
    instanceType?: string;
    jobRoleArn?: string;
    linuxParameters?: LinuxParameters;
    logConfiguration?: LogConfiguration;
    memory?: number;
    mountPoints?: MountPoint[];
    networkConfiguration?: NetworkConfiguration;
    privileged?: boolean;
    readonlyRootFilesystem?: boolean;
    resourceRequirements?: ResourceRequirement[];
    secrets?: Secret[];
    ulimits?: Ulimit[];
    user?: string;
    vcpus?: number;
    volumes?: Volume[];
}
