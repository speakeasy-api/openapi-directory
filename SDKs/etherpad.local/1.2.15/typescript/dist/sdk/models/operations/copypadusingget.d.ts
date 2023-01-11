import { SpeakeasyBase } from "../../../internal/utils";
export declare class CopyPadUsingGetQueryParams extends SpeakeasyBase {
    destinationID?: string;
    force?: string;
    sourceID?: string;
}
export declare class CopyPadUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CopyPadUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CopyPadUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CopyPadUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CopyPadUsingGetRequest extends SpeakeasyBase {
    queryParams: CopyPadUsingGetQueryParams;
}
export declare class CopyPadUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    copyPadUsingGET200ApplicationJSONObject?: CopyPadUsingGet200ApplicationJson;
    copyPadUsingGET400ApplicationJSONObject?: CopyPadUsingGet400ApplicationJson;
    copyPadUsingGET401ApplicationJSONObject?: CopyPadUsingGet401ApplicationJson;
    copyPadUsingGET500ApplicationJSONObject?: CopyPadUsingGet500ApplicationJson;
}
