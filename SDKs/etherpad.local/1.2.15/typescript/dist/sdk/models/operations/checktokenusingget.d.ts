import { SpeakeasyBase } from "../../../internal/utils";
export declare class CheckTokenUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CheckTokenUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CheckTokenUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CheckTokenUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CheckTokenUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    checkTokenUsingGET200ApplicationJSONObject?: CheckTokenUsingGet200ApplicationJson;
    checkTokenUsingGET400ApplicationJSONObject?: CheckTokenUsingGet400ApplicationJson;
    checkTokenUsingGET401ApplicationJSONObject?: CheckTokenUsingGet401ApplicationJson;
    checkTokenUsingGET500ApplicationJSONObject?: CheckTokenUsingGet500ApplicationJson;
}
