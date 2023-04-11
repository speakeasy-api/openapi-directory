import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetHTMLUsingGETRequest extends SpeakeasyBase {
    html?: string;
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class SetHTMLUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class SetHTMLUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class SetHTMLUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class SetHTMLUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetHTMLUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    setHTMLUsingGET200ApplicationJSONObject?: SetHTMLUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    setHTMLUsingGET400ApplicationJSONObject?: SetHTMLUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    setHTMLUsingGET401ApplicationJSONObject?: SetHTMLUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    setHTMLUsingGET500ApplicationJSONObject?: SetHTMLUsingGet500ApplicationJSON;
}
