import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListAuthorsOfPadUsingPOSTRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class ListAuthorsOfPadUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class ListAuthorsOfPadUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class ListAuthorsOfPadUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListAuthorsOfPadUsingPost200ApplicationJSONData extends SpeakeasyBase {
    authorIDs?: string[];
}
/**
 * ok (code 0)
 */
export declare class ListAuthorsOfPadUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: ListAuthorsOfPadUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class ListAuthorsOfPadUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    listAuthorsOfPadUsingPOST200ApplicationJSONObject?: ListAuthorsOfPadUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    listAuthorsOfPadUsingPOST400ApplicationJSONObject?: ListAuthorsOfPadUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    listAuthorsOfPadUsingPOST401ApplicationJSONObject?: ListAuthorsOfPadUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    listAuthorsOfPadUsingPOST500ApplicationJSONObject?: ListAuthorsOfPadUsingPost500ApplicationJSON;
}
