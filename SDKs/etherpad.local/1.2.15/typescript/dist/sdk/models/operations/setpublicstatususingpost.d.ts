import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetPublicStatusUsingPOSTRequest extends SpeakeasyBase {
    padID?: string;
    publicStatus?: string;
}
/**
 * internal api error (code 2)
 */
export declare class SetPublicStatusUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class SetPublicStatusUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class SetPublicStatusUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class SetPublicStatusUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetPublicStatusUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    setPublicStatusUsingPOST200ApplicationJSONObject?: SetPublicStatusUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    setPublicStatusUsingPOST400ApplicationJSONObject?: SetPublicStatusUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    setPublicStatusUsingPOST401ApplicationJSONObject?: SetPublicStatusUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    setPublicStatusUsingPOST500ApplicationJSONObject?: SetPublicStatusUsingPost500ApplicationJSON;
}
