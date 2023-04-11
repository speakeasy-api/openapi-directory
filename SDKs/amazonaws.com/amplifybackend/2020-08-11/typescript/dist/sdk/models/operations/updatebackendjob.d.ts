import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateBackendJobRequestBody extends SpeakeasyBase {
    /**
     * Filters the list of response objects to include only those with the specified operation name.
     */
    operation?: string;
    /**
     * Filters the list of response objects to include only those with the specified status.
     */
    status?: string;
}
export declare class UpdateBackendJobRequest extends SpeakeasyBase {
    requestBody: UpdateBackendJobRequestBody;
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
    /**
     * The ID for the job.
     */
    jobId: string;
}
export declare class UpdateBackendJobResponse extends SpeakeasyBase {
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
    updateBackendJobResponse?: shared.UpdateBackendJobResponse;
}
