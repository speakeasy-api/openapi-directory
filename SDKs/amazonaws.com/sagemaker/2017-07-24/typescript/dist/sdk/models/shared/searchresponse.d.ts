import { SpeakeasyBase } from "../../../internal/utils";
import { SearchRecord } from "./searchrecord";
/**
 * Success
 */
export declare class SearchResponse extends SpeakeasyBase {
    nextToken?: string;
    results?: SearchRecord[];
}
