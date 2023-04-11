import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateGroupPadUsingPOSTRequest extends SpeakeasyBase {
    groupID?: string;
    padName?: string;
    text?: string;
}
/**
 * internal api error (code 2)
 */
export declare class CreateGroupPadUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class CreateGroupPadUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class CreateGroupPadUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class CreateGroupPadUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupPadUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    createGroupPadUsingPOST200ApplicationJSONObject?: CreateGroupPadUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    createGroupPadUsingPOST400ApplicationJSONObject?: CreateGroupPadUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    createGroupPadUsingPOST401ApplicationJSONObject?: CreateGroupPadUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    createGroupPadUsingPOST500ApplicationJSONObject?: CreateGroupPadUsingPost500ApplicationJSON;
}
