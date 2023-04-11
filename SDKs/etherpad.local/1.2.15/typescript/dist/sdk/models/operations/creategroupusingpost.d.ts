import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * internal api error (code 2)
 */
export declare class CreateGroupUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class CreateGroupUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class CreateGroupUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupUsingPost200ApplicationJSONData extends SpeakeasyBase {
    groupID?: string;
}
/**
 * ok (code 0)
 */
export declare class CreateGroupUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: CreateGroupUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class CreateGroupUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    createGroupUsingPOST200ApplicationJSONObject?: CreateGroupUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    createGroupUsingPOST400ApplicationJSONObject?: CreateGroupUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    createGroupUsingPOST401ApplicationJSONObject?: CreateGroupUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    createGroupUsingPOST500ApplicationJSONObject?: CreateGroupUsingPost500ApplicationJSON;
}
