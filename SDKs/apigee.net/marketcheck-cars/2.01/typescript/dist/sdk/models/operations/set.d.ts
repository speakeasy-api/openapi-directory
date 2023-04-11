import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetRequestBodyCsvfile extends SpeakeasyBase {
    content: Uint8Array;
    csvfile: string;
}
export declare class SetRequestBody extends SpeakeasyBase {
    /**
     * csv file with filters
     */
    csvfile: SetRequestBodyCsvfile;
}
/**
 * To filter listing on Country in which they are listed
 */
export declare enum SetCountryEnum {
    Us = "US",
    Ca = "CA",
    Uk = "UK"
}
export declare class SetRequest extends SpeakeasyBase {
    requestBody: SetRequestBody;
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * To filter listing on Country in which they are listed
     */
    country: SetCountryEnum;
}
export declare class SetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
