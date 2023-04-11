import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The subscription protocol to which exception notifications are posted.
 */
export declare enum CreateDatalakeExceptionsSubscriptionRequestBodySubscriptionProtocolEnum {
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
export declare class CreateDatalakeExceptionsSubscriptionRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Web Services account where you want to receive exception notifications.
     */
    notificationEndpoint: string;
    /**
     * The subscription protocol to which exception notifications are posted.
     */
    subscriptionProtocol: CreateDatalakeExceptionsSubscriptionRequestBodySubscriptionProtocolEnum;
}
export declare class CreateDatalakeExceptionsSubscriptionRequest extends SpeakeasyBase {
    requestBody: CreateDatalakeExceptionsSubscriptionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDatalakeExceptionsSubscriptionResponse extends SpeakeasyBase {
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
     * Success
     */
    createDatalakeExceptionsSubscriptionResponse?: Record<string, any>;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
