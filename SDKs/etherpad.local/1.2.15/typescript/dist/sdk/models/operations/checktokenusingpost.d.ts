import { SpeakeasyBase } from "../../../internal/utils";
export declare class CheckTokenUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CheckTokenUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CheckTokenUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CheckTokenUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CheckTokenUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    checkTokenUsingPOST200ApplicationJSONObject?: CheckTokenUsingPost200ApplicationJson;
    checkTokenUsingPOST400ApplicationJSONObject?: CheckTokenUsingPost400ApplicationJson;
    checkTokenUsingPOST401ApplicationJSONObject?: CheckTokenUsingPost401ApplicationJson;
    checkTokenUsingPOST500ApplicationJSONObject?: CheckTokenUsingPost500ApplicationJson;
}
