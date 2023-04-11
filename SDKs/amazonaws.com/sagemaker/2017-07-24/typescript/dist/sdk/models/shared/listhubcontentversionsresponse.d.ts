import { SpeakeasyBase } from "../../../internal/utils";
import { HubContentInfo } from "./hubcontentinfo";
/**
 * Success
 */
export declare class ListHubContentVersionsResponse extends SpeakeasyBase {
    hubContentSummaries: HubContentInfo[];
    nextToken?: string;
}
