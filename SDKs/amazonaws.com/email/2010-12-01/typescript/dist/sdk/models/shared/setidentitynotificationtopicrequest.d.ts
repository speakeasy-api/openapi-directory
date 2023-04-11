import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationTypeEnum } from "./notificationtypeenum";
/**
 * Represents a request to specify the Amazon SNS topic to which Amazon SES will publish bounce, complaint, or delivery notifications for emails sent with that identity as the Source. For information about Amazon SES notifications, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-sns.html">Amazon SES Developer Guide</a>.
 */
export declare class SetIdentityNotificationTopicRequest extends SpeakeasyBase {
    identity: string;
    notificationType: NotificationTypeEnum;
    snsTopic?: string;
}
