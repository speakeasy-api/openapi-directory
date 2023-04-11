import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTextUsingPOSTRequest extends SpeakeasyBase {
    padID?: string;
    rev?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GetTextUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GetTextUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GetTextUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetTextUsingPost200ApplicationJSONData extends SpeakeasyBase {
    text?: string;
}
/**
 * ok (code 0)
 */
export declare class GetTextUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: GetTextUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class GetTextUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getTextUsingPOST200ApplicationJSONObject?: GetTextUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getTextUsingPOST400ApplicationJSONObject?: GetTextUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getTextUsingPOST401ApplicationJSONObject?: GetTextUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getTextUsingPOST500ApplicationJSONObject?: GetTextUsingPost500ApplicationJSON;
}
