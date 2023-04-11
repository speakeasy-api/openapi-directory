import { SpeakeasyBase } from "../../../internal/utils";
import { ReadSetListItem } from "./readsetlistitem";
/**
 * Success
 */
export declare class ListReadSetsResponse extends SpeakeasyBase {
    nextToken?: string;
    readSets: ReadSetListItem[];
}
