import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The engine type for the runtime environment.
 */
export declare enum CreateEnvironmentRequestBodyEngineTypeEnum {
    Microfocus = "microfocus",
    Bluage = "bluage"
}
/**
 * Defines the details of a high availability configuration.
 */
export declare class CreateEnvironmentRequestBodyHighAvailabilityConfig extends SpeakeasyBase {
    desiredCapacity?: number;
}
export declare class CreateEnvironmentRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier you provide to ensure the idempotency of the request to create an environment. The service generates the clientToken when the API call is triggered. The token expires after one hour, so if you retry the API within this timeframe with the same clientToken, you will get the same response. The service also handles deleting the clientToken after it expires.
     */
    clientToken?: string;
    /**
     * The description of the runtime environment.
     */
    description?: string;
    /**
     * The engine type for the runtime environment.
     */
    engineType: CreateEnvironmentRequestBodyEngineTypeEnum;
    /**
     * The version of the engine type for the runtime environment.
     */
    engineVersion?: string;
    /**
     * Defines the details of a high availability configuration.
     */
    highAvailabilityConfig?: CreateEnvironmentRequestBodyHighAvailabilityConfig;
    /**
     * The type of instance for the runtime environment.
     */
    instanceType: string;
    /**
     * The identifier of a customer managed key.
     */
    kmsKeyId?: string;
    /**
     * The name of the runtime environment. Must be unique within the account.
     */
    name: string;
    /**
     * Configures the maintenance window you want for the runtime environment. If you do not provide a value, a random system-generated value will be assigned.
     */
    preferredMaintenanceWindow?: string;
    /**
     * Specifies whether the runtime environment is publicly accessible.
     */
    publiclyAccessible?: boolean;
    /**
     * The list of security groups for the VPC associated with this runtime environment.
     */
    securityGroupIds?: string[];
    /**
     * Optional. The storage configurations for this runtime environment.
     */
    storageConfigurations?: shared.StorageConfiguration[];
    /**
     * The list of subnets associated with the VPC for this runtime environment.
     */
    subnetIds?: string[];
    /**
     * The tags for the runtime environment.
     */
    tags?: Record<string, string>;
}
export declare class CreateEnvironmentRequest extends SpeakeasyBase {
    requestBody: CreateEnvironmentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateEnvironmentResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createEnvironmentResponse?: shared.CreateEnvironmentResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
