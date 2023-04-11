import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceActionSummary } from "./serviceactionsummary";
/**
 * Success
 */
export declare class ListServiceActionsOutput extends SpeakeasyBase {
    nextPageToken?: string;
    serviceActionSummaries?: ServiceActionSummary[];
}
