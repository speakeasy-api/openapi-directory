import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRevisionsCountUsingPOSTRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GetRevisionsCountUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GetRevisionsCountUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GetRevisionsCountUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetRevisionsCountUsingPost200ApplicationJSONData extends SpeakeasyBase {
    revisions?: number;
}
/**
 * ok (code 0)
 */
export declare class GetRevisionsCountUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: GetRevisionsCountUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class GetRevisionsCountUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getRevisionsCountUsingPOST200ApplicationJSONObject?: GetRevisionsCountUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getRevisionsCountUsingPOST400ApplicationJSONObject?: GetRevisionsCountUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getRevisionsCountUsingPOST401ApplicationJSONObject?: GetRevisionsCountUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getRevisionsCountUsingPOST500ApplicationJSONObject?: GetRevisionsCountUsingPost500ApplicationJSON;
}
