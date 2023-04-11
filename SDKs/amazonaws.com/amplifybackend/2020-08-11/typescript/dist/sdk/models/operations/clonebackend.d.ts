import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloneBackendRequestBody extends SpeakeasyBase {
    /**
     * The name of the destination backend environment to be created.
     */
    targetEnvironmentName: string;
}
export declare class CloneBackendRequest extends SpeakeasyBase {
    requestBody: CloneBackendRequestBody;
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
export declare class CloneBackendResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * Success
     */
    cloneBackendResponse?: shared.CloneBackendResponse;
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
}
