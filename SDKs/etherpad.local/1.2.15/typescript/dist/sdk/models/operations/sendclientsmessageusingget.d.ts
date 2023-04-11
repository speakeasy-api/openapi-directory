import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SendClientsMessageUsingGETRequest extends SpeakeasyBase {
    msg?: string;
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class SendClientsMessageUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class SendClientsMessageUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class SendClientsMessageUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class SendClientsMessageUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SendClientsMessageUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    sendClientsMessageUsingGET200ApplicationJSONObject?: SendClientsMessageUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    sendClientsMessageUsingGET400ApplicationJSONObject?: SendClientsMessageUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    sendClientsMessageUsingGET401ApplicationJSONObject?: SendClientsMessageUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    sendClientsMessageUsingGET500ApplicationJSONObject?: SendClientsMessageUsingGet500ApplicationJSON;
}
