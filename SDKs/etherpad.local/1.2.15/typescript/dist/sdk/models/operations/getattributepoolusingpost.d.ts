import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAttributePoolUsingPOSTRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GetAttributePoolUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GetAttributePoolUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GetAttributePoolUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class GetAttributePoolUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetAttributePoolUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getAttributePoolUsingPOST200ApplicationJSONObject?: GetAttributePoolUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getAttributePoolUsingPOST400ApplicationJSONObject?: GetAttributePoolUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getAttributePoolUsingPOST401ApplicationJSONObject?: GetAttributePoolUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getAttributePoolUsingPOST500ApplicationJSONObject?: GetAttributePoolUsingPost500ApplicationJSON;
}
