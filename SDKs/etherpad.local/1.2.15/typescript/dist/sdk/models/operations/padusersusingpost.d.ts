import { SpeakeasyBase } from "../../../internal/utils";
export declare class PadUsersUsingPostQueryParams extends SpeakeasyBase {
    padID?: string;
}
export declare class PadUsersUsingPost200ApplicationJsonDataPadUsers extends SpeakeasyBase {
    colorId?: string;
    id?: string;
    name?: string;
    timestamp?: number;
}
export declare class PadUsersUsingPost200ApplicationJsonData extends SpeakeasyBase {
    padUsers?: PadUsersUsingPost200ApplicationJsonDataPadUsers[];
}
export declare class PadUsersUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: PadUsersUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class PadUsersUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class PadUsersUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class PadUsersUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class PadUsersUsingPostRequest extends SpeakeasyBase {
    queryParams: PadUsersUsingPostQueryParams;
}
export declare class PadUsersUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    padUsersUsingPOST200ApplicationJSONObject?: PadUsersUsingPost200ApplicationJson;
    padUsersUsingPOST400ApplicationJSONObject?: PadUsersUsingPost400ApplicationJson;
    padUsersUsingPOST401ApplicationJSONObject?: PadUsersUsingPost401ApplicationJson;
    padUsersUsingPOST500ApplicationJSONObject?: PadUsersUsingPost500ApplicationJson;
}
