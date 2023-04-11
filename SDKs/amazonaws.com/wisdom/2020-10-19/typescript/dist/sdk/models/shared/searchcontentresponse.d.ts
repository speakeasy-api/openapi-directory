import { SpeakeasyBase } from "../../../internal/utils";
import { ContentSummary } from "./contentsummary";
/**
 * Success
 */
export declare class SearchContentResponse extends SpeakeasyBase {
    contentSummaries: ContentSummary[];
    nextToken?: string;
}
