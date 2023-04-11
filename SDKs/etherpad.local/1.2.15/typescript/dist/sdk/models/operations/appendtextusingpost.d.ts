import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppendTextUsingPOSTRequest extends SpeakeasyBase {
    padID?: string;
    text?: string;
}
/**
 * internal api error (code 2)
 */
export declare class AppendTextUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class AppendTextUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class AppendTextUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class AppendTextUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class AppendTextUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    appendTextUsingPOST200ApplicationJSONObject?: AppendTextUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    appendTextUsingPOST400ApplicationJSONObject?: AppendTextUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    appendTextUsingPOST401ApplicationJSONObject?: AppendTextUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    appendTextUsingPOST500ApplicationJSONObject?: AppendTextUsingPost500ApplicationJSON;
}
