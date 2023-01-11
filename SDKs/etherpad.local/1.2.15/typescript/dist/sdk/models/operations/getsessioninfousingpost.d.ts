import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSessionInfoUsingPostQueryParams extends SpeakeasyBase {
    sessionID?: string;
}
export declare class GetSessionInfoUsingPost200ApplicationJsonDataInfo extends SpeakeasyBase {
    authorID?: string;
    groupID?: string;
    id?: string;
    validUntil?: number;
}
export declare class GetSessionInfoUsingPost200ApplicationJsonData extends SpeakeasyBase {
    info?: GetSessionInfoUsingPost200ApplicationJsonDataInfo;
}
export declare class GetSessionInfoUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetSessionInfoUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class GetSessionInfoUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetSessionInfoUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetSessionInfoUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetSessionInfoUsingPostRequest extends SpeakeasyBase {
    queryParams: GetSessionInfoUsingPostQueryParams;
}
export declare class GetSessionInfoUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getSessionInfoUsingPOST200ApplicationJSONObject?: GetSessionInfoUsingPost200ApplicationJson;
    getSessionInfoUsingPOST400ApplicationJSONObject?: GetSessionInfoUsingPost400ApplicationJson;
    getSessionInfoUsingPOST401ApplicationJSONObject?: GetSessionInfoUsingPost401ApplicationJson;
    getSessionInfoUsingPOST500ApplicationJSONObject?: GetSessionInfoUsingPost500ApplicationJson;
}
