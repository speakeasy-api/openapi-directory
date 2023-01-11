import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListPadsOfAuthorUsingGetQueryParams extends SpeakeasyBase {
    authorID?: string;
}
export declare class ListPadsOfAuthorUsingGet200ApplicationJsonData extends SpeakeasyBase {
    padIDs?: string[];
}
export declare class ListPadsOfAuthorUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListPadsOfAuthorUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class ListPadsOfAuthorUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListPadsOfAuthorUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListPadsOfAuthorUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListPadsOfAuthorUsingGetRequest extends SpeakeasyBase {
    queryParams: ListPadsOfAuthorUsingGetQueryParams;
}
export declare class ListPadsOfAuthorUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listPadsOfAuthorUsingGET200ApplicationJSONObject?: ListPadsOfAuthorUsingGet200ApplicationJson;
    listPadsOfAuthorUsingGET400ApplicationJSONObject?: ListPadsOfAuthorUsingGet400ApplicationJson;
    listPadsOfAuthorUsingGET401ApplicationJSONObject?: ListPadsOfAuthorUsingGet401ApplicationJson;
    listPadsOfAuthorUsingGET500ApplicationJSONObject?: ListPadsOfAuthorUsingGet500ApplicationJson;
}
