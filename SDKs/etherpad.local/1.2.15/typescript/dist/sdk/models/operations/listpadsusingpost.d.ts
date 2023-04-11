import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListPadsUsingPOSTRequest extends SpeakeasyBase {
    groupID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class ListPadsUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class ListPadsUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class ListPadsUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListPadsUsingPost200ApplicationJSONData extends SpeakeasyBase {
    padIDs?: string[];
}
/**
 * ok (code 0)
 */
export declare class ListPadsUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: ListPadsUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class ListPadsUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    listPadsUsingPOST200ApplicationJSONObject?: ListPadsUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    listPadsUsingPOST400ApplicationJSONObject?: ListPadsUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    listPadsUsingPOST401ApplicationJSONObject?: ListPadsUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    listPadsUsingPOST500ApplicationJSONObject?: ListPadsUsingPost500ApplicationJSON;
}
