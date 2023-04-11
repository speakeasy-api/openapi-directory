import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The name of the storage service.
 */
export declare enum DeleteBackendStorageRequestBodyServiceNameEnum {
    S3 = "S3"
}
export declare class DeleteBackendStorageRequestBody extends SpeakeasyBase {
    /**
     * The name of the storage resource.
     */
    resourceName: string;
    /**
     * The name of the storage service.
     */
    serviceName: DeleteBackendStorageRequestBodyServiceNameEnum;
}
export declare class DeleteBackendStorageRequest extends SpeakeasyBase {
    requestBody: DeleteBackendStorageRequestBody;
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
export declare class DeleteBackendStorageResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteBackendStorageResponse?: shared.DeleteBackendStorageResponse;
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
