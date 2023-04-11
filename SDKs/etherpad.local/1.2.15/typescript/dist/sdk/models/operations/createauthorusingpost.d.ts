import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateAuthorUsingPOSTRequest extends SpeakeasyBase {
    name?: string;
}
/**
 * internal api error (code 2)
 */
export declare class CreateAuthorUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class CreateAuthorUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class CreateAuthorUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateAuthorUsingPost200ApplicationJSONData extends SpeakeasyBase {
    authorID?: string;
}
/**
 * ok (code 0)
 */
export declare class CreateAuthorUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: CreateAuthorUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class CreateAuthorUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    createAuthorUsingPOST200ApplicationJSONObject?: CreateAuthorUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    createAuthorUsingPOST400ApplicationJSONObject?: CreateAuthorUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    createAuthorUsingPOST401ApplicationJSONObject?: CreateAuthorUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    createAuthorUsingPOST500ApplicationJSONObject?: CreateAuthorUsingPost500ApplicationJSON;
}
