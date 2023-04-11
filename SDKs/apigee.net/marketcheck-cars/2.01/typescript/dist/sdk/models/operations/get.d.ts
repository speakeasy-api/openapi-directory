import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * To filter listing on Country in which they are listed
 */
export declare enum GetCountryEnum {
    Us = "US",
    Ca = "CA",
    Uk = "UK"
}
export declare class GetRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * To filter listing on Country in which they are listed
     */
    country: GetCountryEnum;
}
export declare class GetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
