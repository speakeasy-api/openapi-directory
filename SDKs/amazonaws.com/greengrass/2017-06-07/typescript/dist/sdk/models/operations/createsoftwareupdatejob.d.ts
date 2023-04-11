import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The piece of software on the Greengrass core that will be updated.
 */
export declare enum CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum {
    Core = "core",
    OtaAgent = "ota_agent"
}
/**
 * The minimum level of log statements that should be logged by the OTA Agent during an update.
 */
export declare enum CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum {
    None = "NONE",
    Trace = "TRACE",
    Debug = "DEBUG",
    Verbose = "VERBOSE",
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR",
    Fatal = "FATAL"
}
/**
 * The architecture of the cores which are the targets of an update.
 */
export declare enum CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum {
    Armv6l = "armv6l",
    Armv7l = "armv7l",
    X8664 = "x86_64",
    Aarch64 = "aarch64"
}
/**
 * The operating system of the cores which are the targets of an update.
 */
export declare enum CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum {
    Ubuntu = "ubuntu",
    Raspbian = "raspbian",
    AmazonLinux = "amazon_linux",
    Openwrt = "openwrt"
}
export declare class CreateSoftwareUpdateJobRequestBody extends SpeakeasyBase {
    /**
     * The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.
     */
    s3UrlSignerRole: string;
    /**
     * The piece of software on the Greengrass core that will be updated.
     */
    softwareToUpdate: CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum;
    /**
     * The minimum level of log statements that should be logged by the OTA Agent during an update.
     */
    updateAgentLogLevel?: CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum;
    /**
     * The ARNs of the targets (IoT things or IoT thing groups) that this update will be applied to.
     */
    updateTargets: string[];
    /**
     * The architecture of the cores which are the targets of an update.
     */
    updateTargetsArchitecture: CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum;
    /**
     * The operating system of the cores which are the targets of an update.
     */
    updateTargetsOperatingSystem: CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum;
}
export declare class CreateSoftwareUpdateJobRequest extends SpeakeasyBase {
    requestBody: CreateSoftwareUpdateJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A client token used to correlate requests and responses.
     */
    xAmznClientToken?: string;
}
export declare class CreateSoftwareUpdateJobResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createSoftwareUpdateJobResponse?: shared.CreateSoftwareUpdateJobResponse;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
