import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetTextUsingGetQueryParams extends SpeakeasyBase {
    padID?: string;
    text?: string;
}
export declare class SetTextUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetTextUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetTextUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetTextUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetTextUsingGetRequest extends SpeakeasyBase {
    queryParams: SetTextUsingGetQueryParams;
}
export declare class SetTextUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setTextUsingGET200ApplicationJSONObject?: SetTextUsingGet200ApplicationJson;
    setTextUsingGET400ApplicationJSONObject?: SetTextUsingGet400ApplicationJson;
    setTextUsingGET401ApplicationJSONObject?: SetTextUsingGet401ApplicationJson;
    setTextUsingGET500ApplicationJSONObject?: SetTextUsingGet500ApplicationJson;
}
