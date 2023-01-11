import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateAuthorIfNotExistsForUsingGetQueryParams extends SpeakeasyBase {
    authorMapper?: string;
    name?: string;
}
export declare class CreateAuthorIfNotExistsForUsingGet200ApplicationJsonData extends SpeakeasyBase {
    authorID?: string;
}
export declare class CreateAuthorIfNotExistsForUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: CreateAuthorIfNotExistsForUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class CreateAuthorIfNotExistsForUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateAuthorIfNotExistsForUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateAuthorIfNotExistsForUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateAuthorIfNotExistsForUsingGetRequest extends SpeakeasyBase {
    queryParams: CreateAuthorIfNotExistsForUsingGetQueryParams;
}
export declare class CreateAuthorIfNotExistsForUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createAuthorIfNotExistsForUsingGET200ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingGet200ApplicationJson;
    createAuthorIfNotExistsForUsingGET400ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingGet400ApplicationJson;
    createAuthorIfNotExistsForUsingGET401ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingGet401ApplicationJson;
    createAuthorIfNotExistsForUsingGET500ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingGet500ApplicationJson;
}
