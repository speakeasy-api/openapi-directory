import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetHTMLUsingPOSTRequest extends SpeakeasyBase {
    html?: string;
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class SetHTMLUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class SetHTMLUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class SetHTMLUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class SetHTMLUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetHTMLUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    setHTMLUsingPOST200ApplicationJSONObject?: SetHTMLUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    setHTMLUsingPOST400ApplicationJSONObject?: SetHTMLUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    setHTMLUsingPOST401ApplicationJSONObject?: SetHTMLUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    setHTMLUsingPOST500ApplicationJSONObject?: SetHTMLUsingPost500ApplicationJSON;
}
