import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListAuthorsOfPadUsingGetQueryParams extends SpeakeasyBase {
    padID?: string;
}
export declare class ListAuthorsOfPadUsingGet200ApplicationJsonData extends SpeakeasyBase {
    authorIDs?: string[];
}
export declare class ListAuthorsOfPadUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListAuthorsOfPadUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class ListAuthorsOfPadUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListAuthorsOfPadUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListAuthorsOfPadUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListAuthorsOfPadUsingGetRequest extends SpeakeasyBase {
    queryParams: ListAuthorsOfPadUsingGetQueryParams;
}
export declare class ListAuthorsOfPadUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listAuthorsOfPadUsingGET200ApplicationJSONObject?: ListAuthorsOfPadUsingGet200ApplicationJson;
    listAuthorsOfPadUsingGET400ApplicationJSONObject?: ListAuthorsOfPadUsingGet400ApplicationJson;
    listAuthorsOfPadUsingGET401ApplicationJSONObject?: ListAuthorsOfPadUsingGet401ApplicationJson;
    listAuthorsOfPadUsingGET500ApplicationJSONObject?: ListAuthorsOfPadUsingGet500ApplicationJson;
}
