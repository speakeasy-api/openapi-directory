import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateGroupIfNotExistsForUsingPOSTRequest extends SpeakeasyBase {
    groupMapper?: string;
}
/**
 * internal api error (code 2)
 */
export declare class CreateGroupIfNotExistsForUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class CreateGroupIfNotExistsForUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class CreateGroupIfNotExistsForUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupIfNotExistsForUsingPost200ApplicationJSONData extends SpeakeasyBase {
    groupID?: string;
}
/**
 * ok (code 0)
 */
export declare class CreateGroupIfNotExistsForUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: CreateGroupIfNotExistsForUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class CreateGroupIfNotExistsForUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    createGroupIfNotExistsForUsingPOST200ApplicationJSONObject?: CreateGroupIfNotExistsForUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    createGroupIfNotExistsForUsingPOST400ApplicationJSONObject?: CreateGroupIfNotExistsForUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    createGroupIfNotExistsForUsingPOST401ApplicationJSONObject?: CreateGroupIfNotExistsForUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    createGroupIfNotExistsForUsingPOST500ApplicationJSONObject?: CreateGroupIfNotExistsForUsingPost500ApplicationJSON;
}
