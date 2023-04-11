import { SpeakeasyBase } from "../../../internal/utils";
import { ModelCardSummary } from "./modelcardsummary";
/**
 * Success
 */
export declare class ListModelCardsResponse extends SpeakeasyBase {
    modelCardSummaries: ModelCardSummary[];
    nextToken?: string;
}
