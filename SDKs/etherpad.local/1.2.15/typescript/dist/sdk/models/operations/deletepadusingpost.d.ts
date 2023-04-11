import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePadUsingPOSTRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class DeletePadUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class DeletePadUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class DeletePadUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class DeletePadUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeletePadUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    deletePadUsingPOST200ApplicationJSONObject?: DeletePadUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    deletePadUsingPOST400ApplicationJSONObject?: DeletePadUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    deletePadUsingPOST401ApplicationJSONObject?: DeletePadUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    deletePadUsingPOST500ApplicationJSONObject?: DeletePadUsingPost500ApplicationJSON;
}
