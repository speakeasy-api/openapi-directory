import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationConfiguration } from "./notificationconfiguration";
/**
 * Success
 */
export declare class DescribeNotificationConfigurationsAnswer extends SpeakeasyBase {
    nextToken?: string;
    notificationConfigurations: NotificationConfiguration[];
}
