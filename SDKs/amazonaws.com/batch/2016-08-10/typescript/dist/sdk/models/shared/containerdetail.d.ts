import { SpeakeasyBase } from "../../../internal/utils";
import { EphemeralStorage } from "./ephemeralstorage";
import { FargatePlatformConfiguration } from "./fargateplatformconfiguration";
import { KeyValuePair } from "./keyvaluepair";
import { LinuxParameters } from "./linuxparameters";
import { LogConfiguration } from "./logconfiguration";
import { MountPoint } from "./mountpoint";
import { NetworkConfiguration } from "./networkconfiguration";
import { NetworkInterface } from "./networkinterface";
import { ResourceRequirement } from "./resourcerequirement";
import { Secret } from "./secret";
import { Ulimit } from "./ulimit";
import { Volume } from "./volume";
/**
 * An object that represents the details of a container that's part of a job.
 */
export declare class ContainerDetail extends SpeakeasyBase {
    command?: string[];
    containerInstanceArn?: string;
    environment?: KeyValuePair[];
    /**
     * The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate.
     */
    ephemeralStorage?: EphemeralStorage;
    executionRoleArn?: string;
    exitCode?: number;
    fargatePlatformConfiguration?: FargatePlatformConfiguration;
    image?: string;
    instanceType?: string;
    jobRoleArn?: string;
    linuxParameters?: LinuxParameters;
    logConfiguration?: LogConfiguration;
    logStreamName?: string;
    memory?: number;
    mountPoints?: MountPoint[];
    networkConfiguration?: NetworkConfiguration;
    networkInterfaces?: NetworkInterface[];
    privileged?: boolean;
    readonlyRootFilesystem?: boolean;
    reason?: string;
    resourceRequirements?: ResourceRequirement[];
    secrets?: Secret[];
    taskArn?: string;
    ulimits?: Ulimit[];
    user?: string;
    vcpus?: number;
    volumes?: Volume[];
}
