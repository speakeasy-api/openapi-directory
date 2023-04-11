import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListPadsUsingGETRequest extends SpeakeasyBase {
    groupID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class ListPadsUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class ListPadsUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class ListPadsUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListPadsUsingGet200ApplicationJSONData extends SpeakeasyBase {
    padIDs?: string[];
}
/**
 * ok (code 0)
 */
export declare class ListPadsUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: ListPadsUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class ListPadsUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    listPadsUsingGET200ApplicationJSONObject?: ListPadsUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    listPadsUsingGET400ApplicationJSONObject?: ListPadsUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    listPadsUsingGET401ApplicationJSONObject?: ListPadsUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    listPadsUsingGET500ApplicationJSONObject?: ListPadsUsingGet500ApplicationJSON;
}
