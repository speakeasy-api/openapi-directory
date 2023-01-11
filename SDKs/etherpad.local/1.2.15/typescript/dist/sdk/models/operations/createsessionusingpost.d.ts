import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateSessionUsingPostQueryParams extends SpeakeasyBase {
    authorID?: string;
    groupID?: string;
    validUntil?: string;
}
export declare class CreateSessionUsingPost200ApplicationJsonData extends SpeakeasyBase {
    sessionID?: string;
}
export declare class CreateSessionUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: CreateSessionUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class CreateSessionUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateSessionUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateSessionUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateSessionUsingPostRequest extends SpeakeasyBase {
    queryParams: CreateSessionUsingPostQueryParams;
}
export declare class CreateSessionUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createSessionUsingPOST200ApplicationJSONObject?: CreateSessionUsingPost200ApplicationJson;
    createSessionUsingPOST400ApplicationJSONObject?: CreateSessionUsingPost400ApplicationJson;
    createSessionUsingPOST401ApplicationJSONObject?: CreateSessionUsingPost401ApplicationJson;
    createSessionUsingPOST500ApplicationJSONObject?: CreateSessionUsingPost500ApplicationJson;
}
