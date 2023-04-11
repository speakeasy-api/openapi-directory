import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportBackendAuthRequestBody extends SpeakeasyBase {
    /**
     * The ID of the Amazon Cognito identity pool.
     */
    identityPoolId?: string;
    /**
     * The ID of the Amazon Cognito native client.
     */
    nativeClientId: string;
    /**
     * The ID of the Amazon Cognito user pool.
     */
    userPoolId: string;
    /**
     * The ID of the Amazon Cognito web client.
     */
    webClientId: string;
}
export declare class ImportBackendAuthRequest extends SpeakeasyBase {
    requestBody: ImportBackendAuthRequestBody;
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
export declare class ImportBackendAuthResponse extends SpeakeasyBase {
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
    importBackendAuthResponse?: shared.ImportBackendAuthResponse;
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
