import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListSavedRevisionsUsingGetQueryParams extends SpeakeasyBase {
    padID?: string;
}
export declare class ListSavedRevisionsUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSavedRevisionsUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSavedRevisionsUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSavedRevisionsUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSavedRevisionsUsingGetRequest extends SpeakeasyBase {
    queryParams: ListSavedRevisionsUsingGetQueryParams;
}
export declare class ListSavedRevisionsUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listSavedRevisionsUsingGET200ApplicationJSONObject?: ListSavedRevisionsUsingGet200ApplicationJson;
    listSavedRevisionsUsingGET400ApplicationJSONObject?: ListSavedRevisionsUsingGet400ApplicationJson;
    listSavedRevisionsUsingGET401ApplicationJSONObject?: ListSavedRevisionsUsingGet401ApplicationJson;
    listSavedRevisionsUsingGET500ApplicationJSONObject?: ListSavedRevisionsUsingGet500ApplicationJson;
}
