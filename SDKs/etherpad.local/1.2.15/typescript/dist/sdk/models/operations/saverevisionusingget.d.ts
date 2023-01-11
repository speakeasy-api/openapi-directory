import { SpeakeasyBase } from "../../../internal/utils";
export declare class SaveRevisionUsingGetQueryParams extends SpeakeasyBase {
    padID?: string;
    rev?: string;
}
export declare class SaveRevisionUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SaveRevisionUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SaveRevisionUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SaveRevisionUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SaveRevisionUsingGetRequest extends SpeakeasyBase {
    queryParams: SaveRevisionUsingGetQueryParams;
}
export declare class SaveRevisionUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    saveRevisionUsingGET200ApplicationJSONObject?: SaveRevisionUsingGet200ApplicationJson;
    saveRevisionUsingGET400ApplicationJSONObject?: SaveRevisionUsingGet400ApplicationJson;
    saveRevisionUsingGET401ApplicationJSONObject?: SaveRevisionUsingGet401ApplicationJson;
    saveRevisionUsingGET500ApplicationJSONObject?: SaveRevisionUsingGet500ApplicationJson;
}
