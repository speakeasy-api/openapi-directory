import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateAuthorUsingGetQueryParams extends SpeakeasyBase {
    name?: string;
}
export declare class CreateAuthorUsingGet200ApplicationJsonData extends SpeakeasyBase {
    authorID?: string;
}
export declare class CreateAuthorUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: CreateAuthorUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class CreateAuthorUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateAuthorUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateAuthorUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateAuthorUsingGetRequest extends SpeakeasyBase {
    queryParams: CreateAuthorUsingGetQueryParams;
}
export declare class CreateAuthorUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createAuthorUsingGET200ApplicationJSONObject?: CreateAuthorUsingGet200ApplicationJson;
    createAuthorUsingGET400ApplicationJSONObject?: CreateAuthorUsingGet400ApplicationJson;
    createAuthorUsingGET401ApplicationJSONObject?: CreateAuthorUsingGet401ApplicationJson;
    createAuthorUsingGET500ApplicationJSONObject?: CreateAuthorUsingGet500ApplicationJson;
}
