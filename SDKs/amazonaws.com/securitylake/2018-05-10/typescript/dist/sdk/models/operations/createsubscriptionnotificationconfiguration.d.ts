import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The HTTPS method used for the notification subscription.
 */
export declare enum CreateSubscriptionNotificationConfigurationRequestBodyHttpsMethodEnum {
    Post = "POST",
    Put = "PUT"
}
export declare class CreateSubscriptionNotificationConfigurationRequestBody extends SpeakeasyBase {
    /**
     * Create an Amazon Simple Queue Service queue.
     */
    createSqs?: boolean;
    /**
     * The key name for the notification subscription.
     */
    httpsApiKeyName?: string;
    /**
     * The key value for the notification subscription.
     */
    httpsApiKeyValue?: string;
    /**
     * The HTTPS method used for the notification subscription.
     */
    httpsMethod?: CreateSubscriptionNotificationConfigurationRequestBodyHttpsMethodEnum;
    /**
     * The Amazon Resource Name (ARN) of the EventBridge API destinations IAM role that you created. For more information about ARNs and how to use them in policies, see <a href="https://docs.aws.amazon.com//security-lake/latest/userguide/subscriber-data-access.html">Managing data access</a> and <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/security-iam-awsmanpol.html">Amazon Web Services Managed Policies</a> in the Amazon Security Lake User Guide.
     */
    roleArn?: string;
    /**
     * The subscription endpoint in Security Lake. If you prefer notification with an HTTPs endpoint, populate this field.
     */
    subscriptionEndpoint?: string;
}
export declare class CreateSubscriptionNotificationConfigurationRequest extends SpeakeasyBase {
    requestBody: CreateSubscriptionNotificationConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The subscription ID for the notification subscription.
     */
    subscriptionId: string;
}
export declare class CreateSubscriptionNotificationConfigurationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccountNotFoundException
     */
    accountNotFoundException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    createSubscriptionNotificationConfigurationResponse?: shared.CreateSubscriptionNotificationConfigurationResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
