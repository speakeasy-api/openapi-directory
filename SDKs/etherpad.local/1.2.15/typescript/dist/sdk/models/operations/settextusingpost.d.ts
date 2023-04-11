import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetTextUsingPOSTRequest extends SpeakeasyBase {
    padID?: string;
    text?: string;
}
/**
 * internal api error (code 2)
 */
export declare class SetTextUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class SetTextUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class SetTextUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class SetTextUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetTextUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    setTextUsingPOST200ApplicationJSONObject?: SetTextUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    setTextUsingPOST400ApplicationJSONObject?: SetTextUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    setTextUsingPOST401ApplicationJSONObject?: SetTextUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    setTextUsingPOST500ApplicationJSONObject?: SetTextUsingPost500ApplicationJSON;
}
