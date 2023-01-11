import { SpeakeasyBase } from "../../../internal/utils";
export declare class PadUsersCountUsingPostQueryParams extends SpeakeasyBase {
    padID?: string;
}
export declare class PadUsersCountUsingPost200ApplicationJsonData extends SpeakeasyBase {
    padUsersCount?: number;
}
export declare class PadUsersCountUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: PadUsersCountUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class PadUsersCountUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class PadUsersCountUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class PadUsersCountUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class PadUsersCountUsingPostRequest extends SpeakeasyBase {
    queryParams: PadUsersCountUsingPostQueryParams;
}
export declare class PadUsersCountUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    padUsersCountUsingPOST200ApplicationJSONObject?: PadUsersCountUsingPost200ApplicationJson;
    padUsersCountUsingPOST400ApplicationJSONObject?: PadUsersCountUsingPost400ApplicationJson;
    padUsersCountUsingPOST401ApplicationJSONObject?: PadUsersCountUsingPost401ApplicationJson;
    padUsersCountUsingPOST500ApplicationJSONObject?: PadUsersCountUsingPost500ApplicationJson;
}
