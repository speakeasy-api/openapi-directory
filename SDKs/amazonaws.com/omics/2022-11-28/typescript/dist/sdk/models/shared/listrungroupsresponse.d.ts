import { SpeakeasyBase } from "../../../internal/utils";
import { RunGroupListItem } from "./rungrouplistitem";
/**
 * Success
 */
export declare class ListRunGroupsResponse extends SpeakeasyBase {
    items?: RunGroupListItem[];
    nextToken?: string;
}
