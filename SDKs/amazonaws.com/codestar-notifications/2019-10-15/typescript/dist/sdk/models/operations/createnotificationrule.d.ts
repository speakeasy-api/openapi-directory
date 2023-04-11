import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The level of detail to include in the notifications for this resource. <code>BASIC</code> will include only the contents of the event as it would appear in Amazon CloudWatch. <code>FULL</code> will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.
 */
export declare enum CreateNotificationRuleRequestBodyDetailTypeEnum {
    Basic = "BASIC",
    Full = "FULL"
}
/**
 * The status of the notification rule. The default value is <code>ENABLED</code>. If the status is set to <code>DISABLED</code>, notifications aren't sent for the notification rule.
 */
export declare enum CreateNotificationRuleRequestBodyStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare class CreateNotificationRuleRequestBody extends SpeakeasyBase {
    /**
     * <p>A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request with the same parameters is received and a token is included, the request returns information about the initial request that used that token.</p> <note> <p>The Amazon Web Services SDKs prepopulate client request tokens. If you are using an Amazon Web Services SDK, an idempotency token is created for you.</p> </note>
     */
    clientRequestToken?: string;
    /**
     * The level of detail to include in the notifications for this resource. <code>BASIC</code> will include only the contents of the event as it would appear in Amazon CloudWatch. <code>FULL</code> will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.
     */
    detailType: CreateNotificationRuleRequestBodyDetailTypeEnum;
    /**
     * A list of event types associated with this notification rule. For a list of allowed events, see <a>EventTypeSummary</a>.
     */
    eventTypeIds: string[];
    /**
     * The name for the notification rule. Notification rule names must be unique in your Amazon Web Services account.
     */
    name: string;
    /**
     * The Amazon Resource Name (ARN) of the resource to associate with the notification rule. Supported resources include pipelines in CodePipeline, repositories in CodeCommit, and build projects in CodeBuild.
     */
    resource: string;
    /**
     * The status of the notification rule. The default value is <code>ENABLED</code>. If the status is set to <code>DISABLED</code>, notifications aren't sent for the notification rule.
     */
    status?: CreateNotificationRuleRequestBodyStatusEnum;
    /**
     * A list of tags to apply to this notification rule. Key names cannot start with "<code>aws</code>".
     */
    tags?: Record<string, string>;
    /**
     * A list of Amazon Resource Names (ARNs) of Amazon Simple Notification Service topics and Chatbot clients to associate with the notification rule.
     */
    targets: shared.Target[];
}
export declare class CreateNotificationRuleRequest extends SpeakeasyBase {
    requestBody: CreateNotificationRuleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateNotificationRuleResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    /**
     * ConfigurationException
     */
    configurationException?: any;
    contentType: string;
    /**
     * Success
     */
    createNotificationRuleResult?: shared.CreateNotificationRuleResult;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
