import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSearchRequest extends SpeakeasyBase {
    /**
     * Page number of search results. Ex. https://api.byautomata.io/search?page=0&link=cloud+computing,enterprise,security
     */
    page?: string;
    /**
     * We provide information about related companies based on the search terms you provide. Separate search terms with commas. Ex. https://api.byautomata.io/search?link=cloud+computing,enterprise,security
     */
    terms: string;
}
/**
 * A successful operation
 */
export declare class GetSearch200ApplicationJSON extends SpeakeasyBase {
    callsPerMonth?: string;
    companies?: shared.SimilarCompanySearch[];
    countRemaining?: string;
    renewalDate?: string;
}
export declare class GetSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A successful operation
     */
    getSearch200ApplicationJSONObject?: GetSearch200ApplicationJSON;
}
