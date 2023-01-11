import { SpeakeasyBase } from "../../../internal/utils";
export declare class MovePadUsingPostQueryParams extends SpeakeasyBase {
    destinationID?: string;
    force?: string;
    sourceID?: string;
}
export declare class MovePadUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class MovePadUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class MovePadUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class MovePadUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class MovePadUsingPostRequest extends SpeakeasyBase {
    queryParams: MovePadUsingPostQueryParams;
}
export declare class MovePadUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    movePadUsingPOST200ApplicationJSONObject?: MovePadUsingPost200ApplicationJson;
    movePadUsingPOST400ApplicationJSONObject?: MovePadUsingPost400ApplicationJson;
    movePadUsingPOST401ApplicationJSONObject?: MovePadUsingPost401ApplicationJson;
    movePadUsingPOST500ApplicationJSONObject?: MovePadUsingPost500ApplicationJson;
}
