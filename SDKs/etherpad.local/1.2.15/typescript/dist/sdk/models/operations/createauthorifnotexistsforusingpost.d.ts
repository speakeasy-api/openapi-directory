import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateAuthorIfNotExistsForUsingPOSTRequest extends SpeakeasyBase {
    authorMapper?: string;
    name?: string;
}
/**
 * internal api error (code 2)
 */
export declare class CreateAuthorIfNotExistsForUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class CreateAuthorIfNotExistsForUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class CreateAuthorIfNotExistsForUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateAuthorIfNotExistsForUsingPost200ApplicationJSONData extends SpeakeasyBase {
    authorID?: string;
}
/**
 * ok (code 0)
 */
export declare class CreateAuthorIfNotExistsForUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: CreateAuthorIfNotExistsForUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class CreateAuthorIfNotExistsForUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    createAuthorIfNotExistsForUsingPOST200ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    createAuthorIfNotExistsForUsingPOST400ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    createAuthorIfNotExistsForUsingPOST401ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    createAuthorIfNotExistsForUsingPOST500ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingPost500ApplicationJSON;
}
