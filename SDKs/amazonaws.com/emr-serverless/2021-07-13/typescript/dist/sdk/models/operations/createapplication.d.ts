import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The CPU architecture of an application.
 */
export declare enum CreateApplicationRequestBodyArchitectureEnum {
    Arm64 = "ARM64",
    X8664 = "X86_64"
}
/**
 * The configuration for an application to automatically start on job submission.
 */
export declare class CreateApplicationRequestBodyAutoStartConfiguration extends SpeakeasyBase {
    enabled?: boolean;
}
/**
 * The configuration for an application to automatically stop after a certain amount of time being idle.
 */
export declare class CreateApplicationRequestBodyAutoStopConfiguration extends SpeakeasyBase {
    enabled?: boolean;
    idleTimeoutMinutes?: number;
}
/**
 * The image configuration.
 */
export declare class CreateApplicationRequestBodyImageConfiguration extends SpeakeasyBase {
    imageUri?: string;
}
/**
 * The maximum allowed cumulative resources for an application. No new resources will be created once the limit is hit.
 */
export declare class CreateApplicationRequestBodyMaximumCapacity extends SpeakeasyBase {
    cpu?: string;
    disk?: string;
    memory?: string;
}
/**
 * The network configuration for customer VPC connectivity.
 */
export declare class CreateApplicationRequestBodyNetworkConfiguration extends SpeakeasyBase {
    securityGroupIds?: string[];
    subnetIds?: string[];
}
export declare class CreateApplicationRequestBody extends SpeakeasyBase {
    /**
     * The CPU architecture of an application.
     */
    architecture?: CreateApplicationRequestBodyArchitectureEnum;
    /**
     * The configuration for an application to automatically start on job submission.
     */
    autoStartConfiguration?: CreateApplicationRequestBodyAutoStartConfiguration;
    /**
     * The configuration for an application to automatically stop after a certain amount of time being idle.
     */
    autoStopConfiguration?: CreateApplicationRequestBodyAutoStopConfiguration;
    /**
     * The client idempotency token of the application to create. Its value must be unique for each request.
     */
    clientToken: string;
    /**
     * The image configuration.
     */
    imageConfiguration?: CreateApplicationRequestBodyImageConfiguration;
    /**
     * The capacity to initialize when the application is created.
     */
    initialCapacity?: Record<string, shared.InitialCapacityConfig>;
    /**
     * The maximum allowed cumulative resources for an application. No new resources will be created once the limit is hit.
     */
    maximumCapacity?: CreateApplicationRequestBodyMaximumCapacity;
    /**
     * The name of the application.
     */
    name?: string;
    /**
     * The network configuration for customer VPC connectivity.
     */
    networkConfiguration?: CreateApplicationRequestBodyNetworkConfiguration;
    /**
     * The EMR release associated with the application.
     */
    releaseLabel: string;
    /**
     * The tags assigned to the application.
     */
    tags?: Record<string, string>;
    /**
     * The type of application you want to start, such as Spark or Hive.
     */
    type: string;
    /**
     * The key-value pairs that specify worker type to <code>WorkerTypeSpecificationInput</code>. This parameter must contain all valid worker types for a Spark or Hive application. Valid worker types include <code>Driver</code> and <code>Executor</code> for Spark applications and <code>HiveDriver</code> and <code>TezTask</code> for Hive applications. You can either set image details in this parameter for each worker type, or in <code>imageConfiguration</code> for all worker types.
     */
    workerTypeSpecifications?: Record<string, shared.WorkerTypeSpecificationInput>;
}
export declare class CreateApplicationRequest extends SpeakeasyBase {
    requestBody: CreateApplicationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateApplicationResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createApplicationResponse?: shared.CreateApplicationResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
