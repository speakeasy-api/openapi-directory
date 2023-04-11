import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAuthorNameUsingPOSTRequest extends SpeakeasyBase {
    authorID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GetAuthorNameUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GetAuthorNameUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GetAuthorNameUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetAuthorNameUsingPost200ApplicationJSONDataInfo extends SpeakeasyBase {
    colorId?: string;
    id?: string;
    name?: string;
    timestamp?: number;
}
export declare class GetAuthorNameUsingPost200ApplicationJSONData extends SpeakeasyBase {
    info?: GetAuthorNameUsingPost200ApplicationJSONDataInfo;
}
/**
 * ok (code 0)
 */
export declare class GetAuthorNameUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: GetAuthorNameUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class GetAuthorNameUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getAuthorNameUsingPOST200ApplicationJSONObject?: GetAuthorNameUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getAuthorNameUsingPOST400ApplicationJSONObject?: GetAuthorNameUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getAuthorNameUsingPOST401ApplicationJSONObject?: GetAuthorNameUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getAuthorNameUsingPOST500ApplicationJSONObject?: GetAuthorNameUsingPost500ApplicationJSON;
}
