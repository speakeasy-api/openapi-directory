import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSavedRevisionsCountUsingPOSTRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GetSavedRevisionsCountUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GetSavedRevisionsCountUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GetSavedRevisionsCountUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class GetSavedRevisionsCountUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetSavedRevisionsCountUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getSavedRevisionsCountUsingPOST200ApplicationJSONObject?: GetSavedRevisionsCountUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getSavedRevisionsCountUsingPOST400ApplicationJSONObject?: GetSavedRevisionsCountUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getSavedRevisionsCountUsingPOST401ApplicationJSONObject?: GetSavedRevisionsCountUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getSavedRevisionsCountUsingPOST500ApplicationJSONObject?: GetSavedRevisionsCountUsingPost500ApplicationJSON;
}
