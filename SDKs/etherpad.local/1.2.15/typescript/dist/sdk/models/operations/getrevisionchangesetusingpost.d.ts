import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRevisionChangesetUsingPOSTRequest extends SpeakeasyBase {
    padID?: string;
    rev?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GetRevisionChangesetUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GetRevisionChangesetUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GetRevisionChangesetUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class GetRevisionChangesetUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetRevisionChangesetUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getRevisionChangesetUsingPOST200ApplicationJSONObject?: GetRevisionChangesetUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getRevisionChangesetUsingPOST400ApplicationJSONObject?: GetRevisionChangesetUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getRevisionChangesetUsingPOST401ApplicationJSONObject?: GetRevisionChangesetUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getRevisionChangesetUsingPOST500ApplicationJSONObject?: GetRevisionChangesetUsingPost500ApplicationJSON;
}
