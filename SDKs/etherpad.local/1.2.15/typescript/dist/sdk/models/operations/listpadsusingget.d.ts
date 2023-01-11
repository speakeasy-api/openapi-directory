import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListPadsUsingGetQueryParams extends SpeakeasyBase {
    groupID?: string;
}
export declare class ListPadsUsingGet200ApplicationJsonData extends SpeakeasyBase {
    padIDs?: string[];
}
export declare class ListPadsUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListPadsUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class ListPadsUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListPadsUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListPadsUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListPadsUsingGetRequest extends SpeakeasyBase {
    queryParams: ListPadsUsingGetQueryParams;
}
export declare class ListPadsUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listPadsUsingGET200ApplicationJSONObject?: ListPadsUsingGet200ApplicationJson;
    listPadsUsingGET400ApplicationJSONObject?: ListPadsUsingGet400ApplicationJson;
    listPadsUsingGET401ApplicationJSONObject?: ListPadsUsingGet401ApplicationJson;
    listPadsUsingGET500ApplicationJSONObject?: ListPadsUsingGet500ApplicationJson;
}
