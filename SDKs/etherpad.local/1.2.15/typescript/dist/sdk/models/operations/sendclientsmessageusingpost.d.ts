import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SendClientsMessageUsingPOSTRequest extends SpeakeasyBase {
    msg?: string;
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class SendClientsMessageUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class SendClientsMessageUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class SendClientsMessageUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class SendClientsMessageUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SendClientsMessageUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    sendClientsMessageUsingPOST200ApplicationJSONObject?: SendClientsMessageUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    sendClientsMessageUsingPOST400ApplicationJSONObject?: SendClientsMessageUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    sendClientsMessageUsingPOST401ApplicationJSONObject?: SendClientsMessageUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    sendClientsMessageUsingPOST500ApplicationJSONObject?: SendClientsMessageUsingPost500ApplicationJSON;
}
