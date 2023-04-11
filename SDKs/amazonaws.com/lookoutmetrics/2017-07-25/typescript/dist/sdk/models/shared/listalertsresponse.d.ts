import { SpeakeasyBase } from "../../../internal/utils";
import { AlertSummary } from "./alertsummary";
/**
 * Success
 */
export declare class ListAlertsResponse extends SpeakeasyBase {
    alertSummaryList?: AlertSummary[];
    nextToken?: string;
}
