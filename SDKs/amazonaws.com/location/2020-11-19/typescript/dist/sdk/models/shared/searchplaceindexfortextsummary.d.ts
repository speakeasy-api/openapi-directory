import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A summary of the request sent by using <code>SearchPlaceIndexForText</code>.
 */
export declare class SearchPlaceIndexForTextSummary extends SpeakeasyBase {
    biasPosition?: number[];
    dataSource: string;
    filterBBox?: number[];
    filterCountries?: string[];
    language?: string;
    maxResults?: number;
    resultBBox?: number[];
    text: string;
}
