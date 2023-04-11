import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListPadsOfAuthorUsingPOSTRequest extends SpeakeasyBase {
    authorID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class ListPadsOfAuthorUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class ListPadsOfAuthorUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class ListPadsOfAuthorUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListPadsOfAuthorUsingPost200ApplicationJSONData extends SpeakeasyBase {
    padIDs?: string[];
}
/**
 * ok (code 0)
 */
export declare class ListPadsOfAuthorUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: ListPadsOfAuthorUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class ListPadsOfAuthorUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    listPadsOfAuthorUsingPOST200ApplicationJSONObject?: ListPadsOfAuthorUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    listPadsOfAuthorUsingPOST400ApplicationJSONObject?: ListPadsOfAuthorUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    listPadsOfAuthorUsingPOST401ApplicationJSONObject?: ListPadsOfAuthorUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    listPadsOfAuthorUsingPOST500ApplicationJSONObject?: ListPadsOfAuthorUsingPost500ApplicationJSON;
}
