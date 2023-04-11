import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The name of the storage service.
 */
export declare enum ImportBackendStorageRequestBodyServiceNameEnum {
    S3 = "S3"
}
export declare class ImportBackendStorageRequestBody extends SpeakeasyBase {
    /**
     * The name of the S3 bucket.
     */
    bucketName?: string;
    /**
     * The name of the storage service.
     */
    serviceName: ImportBackendStorageRequestBodyServiceNameEnum;
}
export declare class ImportBackendStorageRequest extends SpeakeasyBase {
    requestBody: ImportBackendStorageRequestBody;
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
export declare class ImportBackendStorageResponse extends SpeakeasyBase {
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
     * Success
     */
    importBackendStorageResponse?: shared.ImportBackendStorageResponse;
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
