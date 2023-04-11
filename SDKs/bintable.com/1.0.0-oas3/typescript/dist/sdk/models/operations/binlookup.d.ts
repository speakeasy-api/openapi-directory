import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BinLookupRequest extends SpeakeasyBase {
    /**
     * The API key, which you can get from bintable.com website.
     */
    apiKey: string;
    /**
     * pass the required BIN code
     */
    bin: string;
}
export declare class BinLookupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * BIN data response
     */
    responseItems?: shared.ResponseItem[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
