import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The authorization configuration for the storage S3 bucket.
 */
export declare class CreateBackendStorageRequestBodyResourceConfigPermissions extends SpeakeasyBase {
    authenticated: shared.AuthenticatedElementEnum[];
    unAuthenticated?: shared.UnAuthenticatedElementEnum[];
}
/**
 * The name of the storage service.
 */
export declare enum CreateBackendStorageRequestBodyResourceConfigServiceNameEnum {
    S3 = "S3"
}
/**
 * The resource configuration for creating backend storage.
 */
export declare class CreateBackendStorageRequestBodyResourceConfig extends SpeakeasyBase {
    bucketName?: string;
    permissions?: CreateBackendStorageRequestBodyResourceConfigPermissions;
    serviceName?: CreateBackendStorageRequestBodyResourceConfigServiceNameEnum;
}
export declare class CreateBackendStorageRequestBody extends SpeakeasyBase {
    /**
     * The name of the backend environment.
     */
    backendEnvironmentName: string;
    /**
     * The resource configuration for creating backend storage.
     */
    resourceConfig: CreateBackendStorageRequestBodyResourceConfig;
    /**
     * The name of the storage resource.
     */
    resourceName: string;
}
export declare class CreateBackendStorageRequest extends SpeakeasyBase {
    requestBody: CreateBackendStorageRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The app ID.
     */
    appId: string;
}
export declare class CreateBackendStorageResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createBackendStorageResponse?: shared.CreateBackendStorageResponse;
    /**
     * GatewayTimeoutException
     */
    gatewayTimeoutException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
