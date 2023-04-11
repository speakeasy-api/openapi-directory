import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationRuleSummary } from "./notificationrulesummary";
/**
 * Success
 */
export declare class ListNotificationRulesResult extends SpeakeasyBase {
    nextToken?: string;
    notificationRules?: NotificationRuleSummary[];
}
