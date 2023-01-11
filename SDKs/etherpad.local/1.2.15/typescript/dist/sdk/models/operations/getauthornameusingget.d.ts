import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAuthorNameUsingGetQueryParams extends SpeakeasyBase {
    authorID?: string;
}
export declare class GetAuthorNameUsingGet200ApplicationJsonDataInfo extends SpeakeasyBase {
    colorId?: string;
    id?: string;
    name?: string;
    timestamp?: number;
}
export declare class GetAuthorNameUsingGet200ApplicationJsonData extends SpeakeasyBase {
    info?: GetAuthorNameUsingGet200ApplicationJsonDataInfo;
}
export declare class GetAuthorNameUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetAuthorNameUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class GetAuthorNameUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetAuthorNameUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetAuthorNameUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetAuthorNameUsingGetRequest extends SpeakeasyBase {
    queryParams: GetAuthorNameUsingGetQueryParams;
}
export declare class GetAuthorNameUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAuthorNameUsingGET200ApplicationJSONObject?: GetAuthorNameUsingGet200ApplicationJson;
    getAuthorNameUsingGET400ApplicationJSONObject?: GetAuthorNameUsingGet400ApplicationJson;
    getAuthorNameUsingGET401ApplicationJSONObject?: GetAuthorNameUsingGet401ApplicationJson;
    getAuthorNameUsingGET500ApplicationJSONObject?: GetAuthorNameUsingGet500ApplicationJson;
}
