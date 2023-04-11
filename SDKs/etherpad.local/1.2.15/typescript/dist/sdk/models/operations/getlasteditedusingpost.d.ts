import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetLastEditedUsingPOSTRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GetLastEditedUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GetLastEditedUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GetLastEditedUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetLastEditedUsingPost200ApplicationJSONData extends SpeakeasyBase {
    lastEdited?: number;
}
/**
 * ok (code 0)
 */
export declare class GetLastEditedUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: GetLastEditedUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class GetLastEditedUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getLastEditedUsingPOST200ApplicationJSONObject?: GetLastEditedUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getLastEditedUsingPOST400ApplicationJSONObject?: GetLastEditedUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getLastEditedUsingPOST401ApplicationJSONObject?: GetLastEditedUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getLastEditedUsingPOST500ApplicationJSONObject?: GetLastEditedUsingPost500ApplicationJSON;
}
