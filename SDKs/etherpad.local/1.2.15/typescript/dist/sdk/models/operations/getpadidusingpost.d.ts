import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPadIDUsingPOSTRequest extends SpeakeasyBase {
    roID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GetPadIDUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GetPadIDUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GetPadIDUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class GetPadIDUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetPadIDUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getPadIDUsingPOST200ApplicationJSONObject?: GetPadIDUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getPadIDUsingPOST400ApplicationJSONObject?: GetPadIDUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getPadIDUsingPOST401ApplicationJSONObject?: GetPadIDUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getPadIDUsingPOST500ApplicationJSONObject?: GetPadIDUsingPost500ApplicationJSON;
}
