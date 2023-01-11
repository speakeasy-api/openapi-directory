import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSessionInfoUsingGetQueryParams extends SpeakeasyBase {
    sessionID?: string;
}
export declare class GetSessionInfoUsingGet200ApplicationJsonDataInfo extends SpeakeasyBase {
    authorID?: string;
    groupID?: string;
    id?: string;
    validUntil?: number;
}
export declare class GetSessionInfoUsingGet200ApplicationJsonData extends SpeakeasyBase {
    info?: GetSessionInfoUsingGet200ApplicationJsonDataInfo;
}
export declare class GetSessionInfoUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetSessionInfoUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class GetSessionInfoUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetSessionInfoUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetSessionInfoUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetSessionInfoUsingGetRequest extends SpeakeasyBase {
    queryParams: GetSessionInfoUsingGetQueryParams;
}
export declare class GetSessionInfoUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getSessionInfoUsingGET200ApplicationJSONObject?: GetSessionInfoUsingGet200ApplicationJson;
    getSessionInfoUsingGET400ApplicationJSONObject?: GetSessionInfoUsingGet400ApplicationJson;
    getSessionInfoUsingGET401ApplicationJSONObject?: GetSessionInfoUsingGet401ApplicationJson;
    getSessionInfoUsingGET500ApplicationJSONObject?: GetSessionInfoUsingGet500ApplicationJson;
}
