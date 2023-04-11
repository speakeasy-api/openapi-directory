import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The HTTPS method used for the subscription notification.
 */
export declare enum UpdateSubscriptionNotificationConfigurationRequestBodyHttpsMethodEnum {
    Post = "POST",
    Put = "PUT"
}
export declare class UpdateSubscriptionNotificationConfigurationRequestBody extends SpeakeasyBase {
    /**
     * Create a new subscription notification for the specified subscription ID in Amazon Security Lake.
     */
    createSqs?: boolean;
    /**
     * The key name for the subscription notification.
     */
    httpsApiKeyName?: string;
    /**
     * The key value for the subscription notification.
     */
    httpsApiKeyValue?: string;
    /**
     * The HTTPS method used for the subscription notification.
     */
    httpsMethod?: UpdateSubscriptionNotificationConfigurationRequestBodyHttpsMethodEnum;
    /**
     * The Amazon Resource Name (ARN) specifying the role of the subscriber. For more information about ARNs and how to use them in policies, see, see the <a href="https://docs.aws.amazon.com//security-lake/latest/userguide/subscriber-data-access.html">Managing data access</a> and <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/security-iam-awsmanpol.html">Amazon Web Services Managed Policies</a>in the Amazon Security Lake User Guide.
     */
    roleArn?: string;
    /**
     * The subscription endpoint in Security Lake.
     */
    subscriptionEndpoint?: string;
}
export declare class UpdateSubscriptionNotificationConfigurationRequest extends SpeakeasyBase {
    requestBody: UpdateSubscriptionNotificationConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The subscription ID for which the subscription notification is specified.
     */
    subscriptionId: string;
}
export declare class UpdateSubscriptionNotificationConfigurationResponse extends SpeakeasyBase {
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
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateSubscriptionNotificationConfigurationResponse?: shared.UpdateSubscriptionNotificationConfigurationResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
