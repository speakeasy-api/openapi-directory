import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * internal api error (code 2)
 */
export declare class ListAllGroupsUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class ListAllGroupsUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class ListAllGroupsUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListAllGroupsUsingPost200ApplicationJSONData extends SpeakeasyBase {
    groupIDs?: string[];
}
/**
 * ok (code 0)
 */
export declare class ListAllGroupsUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: ListAllGroupsUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class ListAllGroupsUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    listAllGroupsUsingPOST200ApplicationJSONObject?: ListAllGroupsUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    listAllGroupsUsingPOST400ApplicationJSONObject?: ListAllGroupsUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    listAllGroupsUsingPOST401ApplicationJSONObject?: ListAllGroupsUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    listAllGroupsUsingPOST500ApplicationJSONObject?: ListAllGroupsUsingPost500ApplicationJSON;
}
