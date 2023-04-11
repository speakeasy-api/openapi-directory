import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListSavedRevisionsUsingPOSTRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class ListSavedRevisionsUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class ListSavedRevisionsUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class ListSavedRevisionsUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class ListSavedRevisionsUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSavedRevisionsUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    listSavedRevisionsUsingPOST200ApplicationJSONObject?: ListSavedRevisionsUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    listSavedRevisionsUsingPOST400ApplicationJSONObject?: ListSavedRevisionsUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    listSavedRevisionsUsingPOST401ApplicationJSONObject?: ListSavedRevisionsUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    listSavedRevisionsUsingPOST500ApplicationJSONObject?: ListSavedRevisionsUsingPost500ApplicationJSON;
}
