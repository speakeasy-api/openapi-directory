import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualityResultDescription } from "./dataqualityresultdescription";
/**
 * Success
 */
export declare class ListDataQualityResultsResponse extends SpeakeasyBase {
    nextToken?: string;
    results: DataQualityResultDescription[];
}
