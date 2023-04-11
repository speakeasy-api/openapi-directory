import { SpeakeasyBase } from "../../../internal/utils";
import { HubInfo } from "./hubinfo";
/**
 * Success
 */
export declare class ListHubsResponse extends SpeakeasyBase {
    hubSummaries: HubInfo[];
    nextToken?: string;
}
