import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * internal api error (code 2)
 */
export declare class ListAllPadsUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class ListAllPadsUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class ListAllPadsUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListAllPadsUsingPost200ApplicationJSONData extends SpeakeasyBase {
    padIDs?: string[];
}
/**
 * ok (code 0)
 */
export declare class ListAllPadsUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: ListAllPadsUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class ListAllPadsUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    listAllPadsUsingPOST200ApplicationJSONObject?: ListAllPadsUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    listAllPadsUsingPOST400ApplicationJSONObject?: ListAllPadsUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    listAllPadsUsingPOST401ApplicationJSONObject?: ListAllPadsUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    listAllPadsUsingPOST500ApplicationJSONObject?: ListAllPadsUsingPost500ApplicationJSON;
}
