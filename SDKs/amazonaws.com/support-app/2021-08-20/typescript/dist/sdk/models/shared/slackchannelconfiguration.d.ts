import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationSeverityLevelEnum } from "./notificationseveritylevelenum";
/**
 * The configuration for a Slack channel that you added for your Amazon Web Services account.
 */
export declare class SlackChannelConfiguration extends SpeakeasyBase {
    channelId: string;
    channelName?: string;
    channelRoleArn?: string;
    notifyOnAddCorrespondenceToCase?: boolean;
    notifyOnCaseSeverity?: NotificationSeverityLevelEnum;
    notifyOnCreateOrReopenCase?: boolean;
    notifyOnResolveCase?: boolean;
    teamId: string;
}
