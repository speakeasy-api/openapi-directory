import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSessionInfoUsingPOSTRequest extends SpeakeasyBase {
    sessionID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GetSessionInfoUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GetSessionInfoUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GetSessionInfoUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetSessionInfoUsingPost200ApplicationJSONDataInfo extends SpeakeasyBase {
    authorID?: string;
    groupID?: string;
    id?: string;
    validUntil?: number;
}
export declare class GetSessionInfoUsingPost200ApplicationJSONData extends SpeakeasyBase {
    info?: GetSessionInfoUsingPost200ApplicationJSONDataInfo;
}
/**
 * ok (code 0)
 */
export declare class GetSessionInfoUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: GetSessionInfoUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class GetSessionInfoUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getSessionInfoUsingPOST200ApplicationJSONObject?: GetSessionInfoUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getSessionInfoUsingPOST400ApplicationJSONObject?: GetSessionInfoUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getSessionInfoUsingPOST401ApplicationJSONObject?: GetSessionInfoUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getSessionInfoUsingPOST500ApplicationJSONObject?: GetSessionInfoUsingPost500ApplicationJSON;
}
