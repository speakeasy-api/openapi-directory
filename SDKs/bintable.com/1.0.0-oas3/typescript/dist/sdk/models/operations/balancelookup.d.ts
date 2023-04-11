import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BalanceLookupRequest extends SpeakeasyBase {
    /**
     * The API key, which you can get from bintable.com website.
     */
    apiKey: string;
}
export declare class BalanceLookupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
