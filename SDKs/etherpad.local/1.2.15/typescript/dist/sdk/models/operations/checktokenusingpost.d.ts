import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * internal api error (code 2)
 */
export declare class CheckTokenUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class CheckTokenUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class CheckTokenUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class CheckTokenUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CheckTokenUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    checkTokenUsingPOST200ApplicationJSONObject?: CheckTokenUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    checkTokenUsingPOST400ApplicationJSONObject?: CheckTokenUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    checkTokenUsingPOST401ApplicationJSONObject?: CheckTokenUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    checkTokenUsingPOST500ApplicationJSONObject?: CheckTokenUsingPost500ApplicationJSON;
}
