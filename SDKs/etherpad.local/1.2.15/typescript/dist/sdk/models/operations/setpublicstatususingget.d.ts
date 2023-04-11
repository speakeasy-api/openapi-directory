import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetPublicStatusUsingGETRequest extends SpeakeasyBase {
    padID?: string;
    publicStatus?: string;
}
/**
 * internal api error (code 2)
 */
export declare class SetPublicStatusUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class SetPublicStatusUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class SetPublicStatusUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class SetPublicStatusUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetPublicStatusUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    setPublicStatusUsingGET200ApplicationJSONObject?: SetPublicStatusUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    setPublicStatusUsingGET400ApplicationJSONObject?: SetPublicStatusUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    setPublicStatusUsingGET401ApplicationJSONObject?: SetPublicStatusUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    setPublicStatusUsingGET500ApplicationJSONObject?: SetPublicStatusUsingGet500ApplicationJSON;
}
