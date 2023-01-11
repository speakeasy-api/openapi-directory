import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPublicStatusUsingPostQueryParams extends SpeakeasyBase {
    padID?: string;
}
export declare class GetPublicStatusUsingPost200ApplicationJsonData extends SpeakeasyBase {
    publicStatus?: boolean;
}
export declare class GetPublicStatusUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetPublicStatusUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class GetPublicStatusUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetPublicStatusUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetPublicStatusUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetPublicStatusUsingPostRequest extends SpeakeasyBase {
    queryParams: GetPublicStatusUsingPostQueryParams;
}
export declare class GetPublicStatusUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPublicStatusUsingPOST200ApplicationJSONObject?: GetPublicStatusUsingPost200ApplicationJson;
    getPublicStatusUsingPOST400ApplicationJSONObject?: GetPublicStatusUsingPost400ApplicationJson;
    getPublicStatusUsingPOST401ApplicationJSONObject?: GetPublicStatusUsingPost401ApplicationJson;
    getPublicStatusUsingPOST500ApplicationJSONObject?: GetPublicStatusUsingPost500ApplicationJson;
}
