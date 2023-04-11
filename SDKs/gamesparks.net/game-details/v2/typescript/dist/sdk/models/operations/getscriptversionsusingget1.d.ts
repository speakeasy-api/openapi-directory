import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETScriptVersionsUsingGet1Request extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * pageSize
     */
    pageSize?: number;
}
export declare class GETScriptVersionsUsingGet1Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
