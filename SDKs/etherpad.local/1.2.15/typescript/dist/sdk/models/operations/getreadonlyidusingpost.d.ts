import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetReadOnlyIDUsingPOSTRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GetReadOnlyIDUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GetReadOnlyIDUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GetReadOnlyIDUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetReadOnlyIDUsingPost200ApplicationJSONData extends SpeakeasyBase {
    readOnlyID?: string;
}
/**
 * ok (code 0)
 */
export declare class GetReadOnlyIDUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: GetReadOnlyIDUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class GetReadOnlyIDUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getReadOnlyIDUsingPOST200ApplicationJSONObject?: GetReadOnlyIDUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getReadOnlyIDUsingPOST400ApplicationJSONObject?: GetReadOnlyIDUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getReadOnlyIDUsingPOST401ApplicationJSONObject?: GetReadOnlyIDUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getReadOnlyIDUsingPOST500ApplicationJSONObject?: GetReadOnlyIDUsingPost500ApplicationJSON;
}
