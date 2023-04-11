import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBackendAuthRequestBody extends SpeakeasyBase {
    /**
     * The name of this resource.
     */
    resourceName: string;
}
export declare class GetBackendAuthRequest extends SpeakeasyBase {
    requestBody: GetBackendAuthRequestBody;
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
export declare class GetBackendAuthResponse extends SpeakeasyBase {
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
    getBackendAuthResponse?: shared.GetBackendAuthResponse;
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
