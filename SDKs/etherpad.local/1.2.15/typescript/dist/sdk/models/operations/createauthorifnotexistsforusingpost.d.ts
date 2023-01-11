import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateAuthorIfNotExistsForUsingPostQueryParams extends SpeakeasyBase {
    authorMapper?: string;
    name?: string;
}
export declare class CreateAuthorIfNotExistsForUsingPost200ApplicationJsonData extends SpeakeasyBase {
    authorID?: string;
}
export declare class CreateAuthorIfNotExistsForUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: CreateAuthorIfNotExistsForUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class CreateAuthorIfNotExistsForUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateAuthorIfNotExistsForUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateAuthorIfNotExistsForUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateAuthorIfNotExistsForUsingPostRequest extends SpeakeasyBase {
    queryParams: CreateAuthorIfNotExistsForUsingPostQueryParams;
}
export declare class CreateAuthorIfNotExistsForUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createAuthorIfNotExistsForUsingPOST200ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingPost200ApplicationJson;
    createAuthorIfNotExistsForUsingPOST400ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingPost400ApplicationJson;
    createAuthorIfNotExistsForUsingPOST401ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingPost401ApplicationJson;
    createAuthorIfNotExistsForUsingPOST500ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingPost500ApplicationJson;
}
