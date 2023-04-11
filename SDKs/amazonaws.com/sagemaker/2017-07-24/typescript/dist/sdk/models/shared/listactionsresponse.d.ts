import { SpeakeasyBase } from "../../../internal/utils";
import { ActionSummary } from "./actionsummary";
/**
 * Success
 */
export declare class ListActionsResponse extends SpeakeasyBase {
    actionSummaries?: ActionSummary[];
    nextToken?: string;
}
