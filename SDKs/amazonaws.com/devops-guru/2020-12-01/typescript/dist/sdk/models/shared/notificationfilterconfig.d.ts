import { SpeakeasyBase } from "../../../internal/utils";
import { InsightSeverityEnum } from "./insightseverityenum";
import { NotificationMessageTypeEnum } from "./notificationmessagetypeenum";
/**
 *  The filter configurations for the Amazon SNS notification topic you use with DevOps Guru. You can choose to specify which events or message types to receive notifications for. You can also choose to specify which severity levels to receive notifications for.
 */
export declare class NotificationFilterConfig extends SpeakeasyBase {
    messageTypes?: NotificationMessageTypeEnum[];
    severities?: InsightSeverityEnum[];
}
