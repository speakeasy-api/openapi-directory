import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationSeverityLevelEnum } from "./notificationseveritylevelenum";
/**
 * Success
 */
export declare class UpdateSlackChannelConfigurationResult extends SpeakeasyBase {
    channelId?: string;
    channelName?: string;
    channelRoleArn?: string;
    notifyOnAddCorrespondenceToCase?: boolean;
    notifyOnCaseSeverity?: NotificationSeverityLevelEnum;
    notifyOnCreateOrReopenCase?: boolean;
    notifyOnResolveCase?: boolean;
    teamId?: string;
}
