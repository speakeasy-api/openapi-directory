import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualityResult } from "./dataqualityresult";
/**
 * Success
 */
export declare class BatchGetDataQualityResultResponse extends SpeakeasyBase {
    results: DataQualityResult[];
    resultsNotFound?: string[];
}
