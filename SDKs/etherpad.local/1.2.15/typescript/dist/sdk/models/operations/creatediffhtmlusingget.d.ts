import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateDiffHTMLUsingGETRequest extends SpeakeasyBase {
    endRev?: string;
    padID?: string;
    startRev?: string;
}
/**
 * internal api error (code 2)
 */
export declare class CreateDiffHTMLUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class CreateDiffHTMLUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class CreateDiffHTMLUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class CreateDiffHTMLUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateDiffHTMLUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    createDiffHTMLUsingGET200ApplicationJSONObject?: CreateDiffHTMLUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    createDiffHTMLUsingGET400ApplicationJSONObject?: CreateDiffHTMLUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    createDiffHTMLUsingGET401ApplicationJSONObject?: CreateDiffHTMLUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    createDiffHTMLUsingGET500ApplicationJSONObject?: CreateDiffHTMLUsingGet500ApplicationJSON;
}
