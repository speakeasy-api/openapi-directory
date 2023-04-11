import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The authorization configuration for the storage S3 bucket.
 */
export declare class UpdateBackendStorageRequestBodyResourceConfigPermissions extends SpeakeasyBase {
    authenticated: shared.AuthenticatedElementEnum[];
    unAuthenticated?: shared.UnAuthenticatedElementEnum[];
}
/**
 * The name of the storage service.
 */
export declare enum UpdateBackendStorageRequestBodyResourceConfigServiceNameEnum {
    S3 = "S3"
}
/**
 * The resource configuration for updating backend storage.
 */
export declare class UpdateBackendStorageRequestBodyResourceConfig extends SpeakeasyBase {
    permissions?: UpdateBackendStorageRequestBodyResourceConfigPermissions;
    serviceName?: UpdateBackendStorageRequestBodyResourceConfigServiceNameEnum;
}
export declare class UpdateBackendStorageRequestBody extends SpeakeasyBase {
    /**
     * The resource configuration for updating backend storage.
     */
    resourceConfig: UpdateBackendStorageRequestBodyResourceConfig;
    /**
     * The name of the storage resource.
     */
    resourceName: string;
}
export declare class UpdateBackendStorageRequest extends SpeakeasyBase {
    requestBody: UpdateBackendStorageRequestBody;
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
    /**
     * The name of the backend environment.
     */
    backendEnvironmentName: string;
}
export declare class UpdateBackendStorageResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
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
    /**
     * Success
     */
    updateBackendStorageResponse?: shared.UpdateBackendStorageResponse;
}
