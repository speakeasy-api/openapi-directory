import { SpeakeasyBase } from "../../../internal/utils";
import { HubContentInfo } from "./hubcontentinfo";
/**
 * Success
 */
export declare class ListHubContentsResponse extends SpeakeasyBase {
    hubContentSummaries: HubContentInfo[];
    nextToken?: string;
}
