import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSimilarRequest extends SpeakeasyBase {
    /**
     * We'll provide information about related companies based on the site you provide. If a LinkedIn page is sent, we will try to identify the company related to the page. Ex. https://api.byautomata.io/similar?link=ibm.com
     */
    link: string;
    /**
     * Page number of search results. Ex. https://api.byautomata.io/similar?link=ibm.com&page=1
     */
    page?: string;
}
/**
 * A successful operation
 */
export declare class GetSimilar200ApplicationJSON extends SpeakeasyBase {
    callsPerMonth?: string;
    companies?: shared.SimilarCompany[];
    countRemaining?: string;
    inputCompany?: shared.InputCompany;
    renewalDate?: string;
}
export declare class GetSimilarResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A successful operation
     */
    getSimilar200ApplicationJSONObject?: GetSimilar200ApplicationJSON;
}
