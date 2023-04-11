import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddNotificationChannelsRequestBody extends SpeakeasyBase {
    /**
     * One or 2 channels to report to when anomalies are detected.
     */
    channels: shared.Channel[];
}
export declare class AddNotificationChannelsRequest extends SpeakeasyBase {
    requestBody: AddNotificationChannelsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the profiling group that we are setting up notifications for.
     */
    profilingGroupName: string;
}
export declare class AddNotificationChannelsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addNotificationChannelsResponse?: shared.AddNotificationChannelsResponse;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
