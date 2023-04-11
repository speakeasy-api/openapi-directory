import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The CPU architecture of an application.
 */
export declare enum UpdateApplicationRequestBodyArchitectureEnum {
    Arm64 = "ARM64",
    X8664 = "X86_64"
}
/**
 * The configuration for an application to automatically start on job submission.
 */
export declare class UpdateApplicationRequestBodyAutoStartConfiguration extends SpeakeasyBase {
    enabled?: boolean;
}
/**
 * The configuration for an application to automatically stop after a certain amount of time being idle.
 */
export declare class UpdateApplicationRequestBodyAutoStopConfiguration extends SpeakeasyBase {
    enabled?: boolean;
    idleTimeoutMinutes?: number;
}
/**
 * The image configuration.
 */
export declare class UpdateApplicationRequestBodyImageConfiguration extends SpeakeasyBase {
    imageUri?: string;
}
/**
 * The maximum allowed cumulative resources for an application. No new resources will be created once the limit is hit.
 */
export declare class UpdateApplicationRequestBodyMaximumCapacity extends SpeakeasyBase {
    cpu?: string;
    disk?: string;
    memory?: string;
}
/**
 * The network configuration for customer VPC connectivity.
 */
export declare class UpdateApplicationRequestBodyNetworkConfiguration extends SpeakeasyBase {
    securityGroupIds?: string[];
    subnetIds?: string[];
}
export declare class UpdateApplicationRequestBody extends SpeakeasyBase {
    /**
     * The CPU architecture of an application.
     */
    architecture?: UpdateApplicationRequestBodyArchitectureEnum;
    /**
     * The configuration for an application to automatically start on job submission.
     */
    autoStartConfiguration?: UpdateApplicationRequestBodyAutoStartConfiguration;
    /**
     * The configuration for an application to automatically stop after a certain amount of time being idle.
     */
    autoStopConfiguration?: UpdateApplicationRequestBodyAutoStopConfiguration;
    /**
     * The client idempotency token of the application to update. Its value must be unique for each request.
     */
    clientToken: string;
    /**
     * The image configuration.
     */
    imageConfiguration?: UpdateApplicationRequestBodyImageConfiguration;
    /**
     * The capacity to initialize when the application is updated.
     */
    initialCapacity?: Record<string, shared.InitialCapacityConfig>;
    /**
     * The maximum allowed cumulative resources for an application. No new resources will be created once the limit is hit.
     */
    maximumCapacity?: UpdateApplicationRequestBodyMaximumCapacity;
    /**
     * The network configuration for customer VPC connectivity.
     */
    networkConfiguration?: UpdateApplicationRequestBodyNetworkConfiguration;
    /**
     * The key-value pairs that specify worker type to <code>WorkerTypeSpecificationInput</code>. This parameter must contain all valid worker types for a Spark or Hive application. Valid worker types include <code>Driver</code> and <code>Executor</code> for Spark applications and <code>HiveDriver</code> and <code>TezTask</code> for Hive applications. You can either set image details in this parameter for each worker type, or in <code>imageConfiguration</code> for all worker types.
     */
    workerTypeSpecifications?: Record<string, shared.WorkerTypeSpecificationInput>;
}
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    requestBody: UpdateApplicationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the application to update.
     */
    applicationId: string;
}
export declare class UpdateApplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateApplicationResponse?: shared.UpdateApplicationResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
