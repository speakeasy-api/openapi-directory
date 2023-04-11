import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationSummary } from "./notificationsummary";
/**
 * Success
 */
export declare class ListNotificationsOutput extends SpeakeasyBase {
    /**
     * The token to use to retrieve the next set of results.
     */
    nextToken?: string;
    notificationSummaries?: NotificationSummary[];
}
