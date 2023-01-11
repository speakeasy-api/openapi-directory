import { SpeakeasyBase } from "../../../internal/utils";
export declare class SaveRevisionUsingPostQueryParams extends SpeakeasyBase {
    padID?: string;
    rev?: string;
}
export declare class SaveRevisionUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SaveRevisionUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SaveRevisionUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SaveRevisionUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SaveRevisionUsingPostRequest extends SpeakeasyBase {
    queryParams: SaveRevisionUsingPostQueryParams;
}
export declare class SaveRevisionUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    saveRevisionUsingPOST200ApplicationJSONObject?: SaveRevisionUsingPost200ApplicationJson;
    saveRevisionUsingPOST400ApplicationJSONObject?: SaveRevisionUsingPost400ApplicationJson;
    saveRevisionUsingPOST401ApplicationJSONObject?: SaveRevisionUsingPost401ApplicationJson;
    saveRevisionUsingPOST500ApplicationJSONObject?: SaveRevisionUsingPost500ApplicationJson;
}
