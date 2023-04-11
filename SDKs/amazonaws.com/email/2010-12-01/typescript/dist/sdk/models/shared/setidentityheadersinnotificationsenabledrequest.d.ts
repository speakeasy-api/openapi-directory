import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationTypeEnum } from "./notificationtypeenum";
/**
 * Represents a request to set whether Amazon SES includes the original email headers in the Amazon SNS notifications of a specified type. For information about notifications, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-sns.html">Amazon SES Developer Guide</a>.
 */
export declare class SetIdentityHeadersInNotificationsEnabledRequest extends SpeakeasyBase {
    enabled: boolean;
    identity: string;
    notificationType: NotificationTypeEnum;
}
