import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSearchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetSearchRequest extends SpeakeasyBase {
    /**
     * Company name or stock symbol
     */
    q: string;
}
/**
 * An array of ESG Ratings
 */
export declare class GetSearch200ApplicationJSON extends SpeakeasyBase {
    companyName?: string;
    environmentScore?: number;
    governanceScore?: number;
    lastProcessingDate?: Date;
    socialScore?: number;
    total?: number;
}
export declare class GetSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An array of ESG Ratings
     */
    getSearch200ApplicationJSONObject?: GetSearch200ApplicationJSON;
}
