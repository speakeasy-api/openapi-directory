import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreatePadUsingPOSTRequest extends SpeakeasyBase {
    padID?: string;
    text?: string;
}
/**
 * internal api error (code 2)
 */
export declare class CreatePadUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class CreatePadUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class CreatePadUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class CreatePadUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreatePadUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    createPadUsingPOST200ApplicationJSONObject?: CreatePadUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    createPadUsingPOST400ApplicationJSONObject?: CreatePadUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    createPadUsingPOST401ApplicationJSONObject?: CreatePadUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    createPadUsingPOST500ApplicationJSONObject?: CreatePadUsingPost500ApplicationJSON;
}
