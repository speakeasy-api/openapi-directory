import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContentproSearchRequest extends SpeakeasyBase {
    /**
     * We provide information about related companies and articles based on the search terms you provide. Separate search terms with commas. Ex. https://api.byautomata.io/contentpro-search?terms=cloud+computing,enterprise,security
     */
    terms: string;
}
export declare class GetContentproSearch200ApplicationJSONData extends SpeakeasyBase {
    article?: shared.Article;
    company?: shared.ContentProCompany;
    snippets?: shared.ContentProSnippets;
}
/**
 * A successful operation
 */
export declare class GetContentproSearch200ApplicationJSON extends SpeakeasyBase {
    callsPerMonth?: string;
    countRemaining?: string;
    data?: GetContentproSearch200ApplicationJSONData[];
    renewalDate?: string;
}
export declare class GetContentproSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A successful operation
     */
    getContentproSearch200ApplicationJSONObject?: GetContentproSearch200ApplicationJSON;
}
