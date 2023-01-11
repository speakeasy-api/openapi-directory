import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateAuthorUsingPostQueryParams extends SpeakeasyBase {
    name?: string;
}
export declare class CreateAuthorUsingPost200ApplicationJsonData extends SpeakeasyBase {
    authorID?: string;
}
export declare class CreateAuthorUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: CreateAuthorUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class CreateAuthorUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateAuthorUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateAuthorUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateAuthorUsingPostRequest extends SpeakeasyBase {
    queryParams: CreateAuthorUsingPostQueryParams;
}
export declare class CreateAuthorUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createAuthorUsingPOST200ApplicationJSONObject?: CreateAuthorUsingPost200ApplicationJson;
    createAuthorUsingPOST400ApplicationJSONObject?: CreateAuthorUsingPost400ApplicationJson;
    createAuthorUsingPOST401ApplicationJSONObject?: CreateAuthorUsingPost401ApplicationJson;
    createAuthorUsingPOST500ApplicationJSONObject?: CreateAuthorUsingPost500ApplicationJson;
}
