import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Adds additional instructions to a streaming session stop action to either retain the EBS volumes or delete the EBS volumes.
 */
export declare enum StopStreamingSessionRequestBodyVolumeRetentionModeEnum {
    Retain = "RETAIN",
    Delete = "DELETE"
}
export declare class StopStreamingSessionRequestBody extends SpeakeasyBase {
    /**
     * Adds additional instructions to a streaming session stop action to either retain the EBS volumes or delete the EBS volumes.
     */
    volumeRetentionMode?: StopStreamingSessionRequestBodyVolumeRetentionModeEnum;
}
export declare class StopStreamingSessionRequest extends SpeakeasyBase {
    requestBody: StopStreamingSessionRequestBody;
    xAmzAlgorithm?: string;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.
     */
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The streaming session ID for the <code>StopStreamingSessionRequest</code>.
     */
    sessionId: string;
    /**
     * The studioId for the StopStreamingSessionRequest.
     */
    studioId: string;
}
export declare class StopStreamingSessionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    stopStreamingSessionResponse?: shared.StopStreamingSessionResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
