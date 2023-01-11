import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetPublicStatusUsingGetQueryParams extends SpeakeasyBase {
    padID?: string;
    publicStatus?: string;
}
export declare class SetPublicStatusUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetPublicStatusUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetPublicStatusUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetPublicStatusUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetPublicStatusUsingGetRequest extends SpeakeasyBase {
    queryParams: SetPublicStatusUsingGetQueryParams;
}
export declare class SetPublicStatusUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setPublicStatusUsingGET200ApplicationJSONObject?: SetPublicStatusUsingGet200ApplicationJson;
    setPublicStatusUsingGET400ApplicationJSONObject?: SetPublicStatusUsingGet400ApplicationJson;
    setPublicStatusUsingGET401ApplicationJSONObject?: SetPublicStatusUsingGet401ApplicationJson;
    setPublicStatusUsingGET500ApplicationJSONObject?: SetPublicStatusUsingGet500ApplicationJson;
}
