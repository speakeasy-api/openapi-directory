import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateBackendRequestBody extends SpeakeasyBase {
    /**
     * The app ID.
     */
    appId: string;
    /**
     * The name of the app.
     */
    appName: string;
    /**
     * The name of the backend environment.
     */
    backendEnvironmentName: string;
    /**
     * Defines the resource configuration for the data model in your Amplify project.
     */
    resourceConfig?: Record<string, any>;
    /**
     * The name of the resource.
     */
    resourceName?: string;
}
export declare class CreateBackendRequest extends SpeakeasyBase {
    requestBody: CreateBackendRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateBackendResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createBackendResponse?: shared.CreateBackendResponse;
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
