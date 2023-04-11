import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteGroupUsingPOSTRequest extends SpeakeasyBase {
    groupID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class DeleteGroupUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class DeleteGroupUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class DeleteGroupUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class DeleteGroupUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeleteGroupUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    deleteGroupUsingPOST200ApplicationJSONObject?: DeleteGroupUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    deleteGroupUsingPOST400ApplicationJSONObject?: DeleteGroupUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    deleteGroupUsingPOST401ApplicationJSONObject?: DeleteGroupUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    deleteGroupUsingPOST500ApplicationJSONObject?: DeleteGroupUsingPost500ApplicationJSON;
}
