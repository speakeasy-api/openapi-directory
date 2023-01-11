import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreatePadUsingGetQueryParams extends SpeakeasyBase {
    padID?: string;
    text?: string;
}
export declare class CreatePadUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreatePadUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreatePadUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreatePadUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreatePadUsingGetRequest extends SpeakeasyBase {
    queryParams: CreatePadUsingGetQueryParams;
}
export declare class CreatePadUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createPadUsingGET200ApplicationJSONObject?: CreatePadUsingGet200ApplicationJson;
    createPadUsingGET400ApplicationJSONObject?: CreatePadUsingGet400ApplicationJson;
    createPadUsingGET401ApplicationJSONObject?: CreatePadUsingGet401ApplicationJson;
    createPadUsingGET500ApplicationJSONObject?: CreatePadUsingGet500ApplicationJson;
}
