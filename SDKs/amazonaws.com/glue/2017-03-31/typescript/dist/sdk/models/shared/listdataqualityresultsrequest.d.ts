import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualityResultFilterCriteria } from "./dataqualityresultfiltercriteria";
export declare class ListDataQualityResultsRequest extends SpeakeasyBase {
    filter?: DataQualityResultFilterCriteria;
    maxResults?: number;
    nextToken?: string;
}
