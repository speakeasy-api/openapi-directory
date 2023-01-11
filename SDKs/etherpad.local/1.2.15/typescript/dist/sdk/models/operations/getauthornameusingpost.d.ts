import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAuthorNameUsingPostQueryParams extends SpeakeasyBase {
    authorID?: string;
}
export declare class GetAuthorNameUsingPost200ApplicationJsonDataInfo extends SpeakeasyBase {
    colorId?: string;
    id?: string;
    name?: string;
    timestamp?: number;
}
export declare class GetAuthorNameUsingPost200ApplicationJsonData extends SpeakeasyBase {
    info?: GetAuthorNameUsingPost200ApplicationJsonDataInfo;
}
export declare class GetAuthorNameUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetAuthorNameUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class GetAuthorNameUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetAuthorNameUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetAuthorNameUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetAuthorNameUsingPostRequest extends SpeakeasyBase {
    queryParams: GetAuthorNameUsingPostQueryParams;
}
export declare class GetAuthorNameUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAuthorNameUsingPOST200ApplicationJSONObject?: GetAuthorNameUsingPost200ApplicationJson;
    getAuthorNameUsingPOST400ApplicationJSONObject?: GetAuthorNameUsingPost400ApplicationJson;
    getAuthorNameUsingPOST401ApplicationJSONObject?: GetAuthorNameUsingPost401ApplicationJson;
    getAuthorNameUsingPOST500ApplicationJSONObject?: GetAuthorNameUsingPost500ApplicationJson;
}
