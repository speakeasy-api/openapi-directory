import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBackendStorageRequestBody extends SpeakeasyBase {
    /**
     * The name of the storage resource.
     */
    resourceName: string;
}
export declare class GetBackendStorageRequest extends SpeakeasyBase {
    requestBody: GetBackendStorageRequestBody;
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
export declare class GetBackendStorageResponse extends SpeakeasyBase {
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
    getBackendStorageResponse?: shared.GetBackendStorageResponse;
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
