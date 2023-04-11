import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPublicStatusUsingPOSTRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GetPublicStatusUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GetPublicStatusUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GetPublicStatusUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetPublicStatusUsingPost200ApplicationJSONData extends SpeakeasyBase {
    publicStatus?: boolean;
}
/**
 * ok (code 0)
 */
export declare class GetPublicStatusUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: GetPublicStatusUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class GetPublicStatusUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getPublicStatusUsingPOST200ApplicationJSONObject?: GetPublicStatusUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getPublicStatusUsingPOST400ApplicationJSONObject?: GetPublicStatusUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getPublicStatusUsingPOST401ApplicationJSONObject?: GetPublicStatusUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getPublicStatusUsingPOST500ApplicationJSONObject?: GetPublicStatusUsingPost500ApplicationJSON;
}
