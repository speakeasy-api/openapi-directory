import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListAllPadsUsingGet200ApplicationJsonData extends SpeakeasyBase {
    padIDs?: string[];
}
export declare class ListAllPadsUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListAllPadsUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class ListAllPadsUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListAllPadsUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListAllPadsUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListAllPadsUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listAllPadsUsingGET200ApplicationJSONObject?: ListAllPadsUsingGet200ApplicationJson;
    listAllPadsUsingGET400ApplicationJSONObject?: ListAllPadsUsingGet400ApplicationJson;
    listAllPadsUsingGET401ApplicationJSONObject?: ListAllPadsUsingGet401ApplicationJson;
    listAllPadsUsingGET500ApplicationJSONObject?: ListAllPadsUsingGet500ApplicationJson;
}
