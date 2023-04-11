import { SpeakeasyBase } from "../../../internal/utils";
import { ContentSummary } from "./contentsummary";
/**
 * Success
 */
export declare class ListContentsResponse extends SpeakeasyBase {
    contentSummaries: ContentSummary[];
    nextToken?: string;
}
