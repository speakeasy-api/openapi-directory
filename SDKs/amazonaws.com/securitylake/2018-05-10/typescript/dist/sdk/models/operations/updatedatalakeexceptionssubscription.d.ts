import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The subscription protocol to which exception messages are posted.
 */
export declare enum UpdateDatalakeExceptionsSubscriptionRequestBodySubscriptionProtocolEnum {
    Http = "HTTP",
    Https = "HTTPS",
    Email = "EMAIL",
    EmailJson = "EMAIL_JSON",
    Sms = "SMS",
    Sqs = "SQS",
    Lambda = "LAMBDA",
    App = "APP",
    Firehose = "FIREHOSE"
}
export declare class UpdateDatalakeExceptionsSubscriptionRequestBody extends SpeakeasyBase {
    /**
     * The account that is subscribed to receive exception notifications.
     */
    notificationEndpoint: string;
    /**
     * The subscription protocol to which exception messages are posted.
     */
    subscriptionProtocol: UpdateDatalakeExceptionsSubscriptionRequestBodySubscriptionProtocolEnum;
}
export declare class UpdateDatalakeExceptionsSubscriptionRequest extends SpeakeasyBase {
    requestBody: UpdateDatalakeExceptionsSubscriptionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDatalakeExceptionsSubscriptionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccountNotFoundException
     */
    accountNotFoundException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateDatalakeExceptionsSubscriptionResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
