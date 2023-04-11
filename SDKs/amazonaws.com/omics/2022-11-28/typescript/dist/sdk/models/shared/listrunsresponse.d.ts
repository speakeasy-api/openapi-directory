import { SpeakeasyBase } from "../../../internal/utils";
import { RunListItem } from "./runlistitem";
/**
 * Success
 */
export declare class ListRunsResponse extends SpeakeasyBase {
    items?: RunListItem[];
    nextToken?: string;
}
