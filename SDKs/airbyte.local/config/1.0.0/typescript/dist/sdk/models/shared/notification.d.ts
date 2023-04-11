import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationTypeEnum } from "./notificationtypeenum";
import { SlackNotificationConfiguration } from "./slacknotificationconfiguration";
export declare class Notification extends SpeakeasyBase {
    customerioConfiguration?: Record<string, any>;
    notificationType: NotificationTypeEnum;
    sendOnFailure: boolean;
    sendOnSuccess: boolean;
    slackConfiguration?: SlackNotificationConfiguration;
}
