import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The possible types of dialer config parameters
 */
export declare class CreateCampaignRequestBodyDialerConfig extends SpeakeasyBase {
    /**
     * Predictive Dialer config
     */
    predictiveDialerConfig?: shared.PredictiveDialerConfig;
    /**
     * Progressive Dialer config
     */
    progressiveDialerConfig?: shared.ProgressiveDialerConfig;
}
/**
 * The configuration used for outbound calls.
 */
export declare class CreateCampaignRequestBodyOutboundCallConfig extends SpeakeasyBase {
    /**
     * Answering Machine Detection config
     */
    answerMachineDetectionConfig?: shared.AnswerMachineDetectionConfig;
    /**
     * The identifier of the contact flow for the outbound call.
     */
    connectContactFlowId?: string;
    /**
     * The queue for the call. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the contact flow is used. If you do not specify a queue, you must specify a source phone number.
     */
    connectQueueId?: string;
    /**
     * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
     */
    connectSourcePhoneNumber?: string;
}
export declare class CreateCampaignRequestBody extends SpeakeasyBase {
    /**
     * Amazon Connect Instance Id
     */
    connectInstanceId: string;
    /**
     * The possible types of dialer config parameters
     */
    dialerConfig: CreateCampaignRequestBodyDialerConfig;
    /**
     * The name of an Amazon Connect Campaign name.
     */
    name: string;
    /**
     * The configuration used for outbound calls.
     */
    outboundCallConfig: CreateCampaignRequestBodyOutboundCallConfig;
    /**
     * Tag map with key and value.
     */
    tags?: Record<string, string>;
}
export declare class CreateCampaignRequest extends SpeakeasyBase {
    requestBody: CreateCampaignRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateCampaignResponse extends SpeakeasyBase {
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
     * Success
     */
    createCampaignResponse?: shared.CreateCampaignResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
