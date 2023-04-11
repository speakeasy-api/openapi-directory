import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The level of detail to include in the notifications for this resource. BASIC will include only the contents of the event as it would appear in Amazon CloudWatch. FULL will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.
 */
export declare enum UpdateNotificationRuleRequestBodyDetailTypeEnum {
    Basic = "BASIC",
    Full = "FULL"
}
/**
 * The status of the notification rule. Valid statuses include enabled (sending notifications) or disabled (not sending notifications).
 */
export declare enum UpdateNotificationRuleRequestBodyStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare class UpdateNotificationRuleRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the notification rule.
     */
    arn: string;
    /**
     * The level of detail to include in the notifications for this resource. BASIC will include only the contents of the event as it would appear in Amazon CloudWatch. FULL will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.
     */
    detailType?: UpdateNotificationRuleRequestBodyDetailTypeEnum;
    /**
     * A list of event types associated with this notification rule. For a complete list of event types and IDs, see <a href="https://docs.aws.amazon.com/codestar-notifications/latest/userguide/concepts.html#concepts-api">Notification concepts</a> in the <i>Developer Tools Console User Guide</i>.
     */
    eventTypeIds?: string[];
    /**
     * The name of the notification rule.
     */
    name?: string;
    /**
     * The status of the notification rule. Valid statuses include enabled (sending notifications) or disabled (not sending notifications).
     */
    status?: UpdateNotificationRuleRequestBodyStatusEnum;
    /**
     * The address and type of the targets to receive notifications from this notification rule.
     */
    targets?: shared.Target[];
}
export declare class UpdateNotificationRuleRequest extends SpeakeasyBase {
    requestBody: UpdateNotificationRuleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateNotificationRuleResponse extends SpeakeasyBase {
    /**
     * ConfigurationException
     */
    configurationException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateNotificationRuleResult?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
