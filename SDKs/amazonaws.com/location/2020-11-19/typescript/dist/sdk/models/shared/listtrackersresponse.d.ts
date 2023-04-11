import { SpeakeasyBase } from "../../../internal/utils";
import { ListTrackersResponseEntry } from "./listtrackersresponseentry";
/**
 * Success
 */
export declare class ListTrackersResponse extends SpeakeasyBase {
    entries: ListTrackersResponseEntry[];
    nextToken?: string;
}
