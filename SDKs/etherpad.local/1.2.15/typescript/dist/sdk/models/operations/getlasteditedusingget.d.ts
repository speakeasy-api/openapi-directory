import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetLastEditedUsingGetQueryParams extends SpeakeasyBase {
    padID?: string;
}
export declare class GetLastEditedUsingGet200ApplicationJsonData extends SpeakeasyBase {
    lastEdited?: number;
}
export declare class GetLastEditedUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetLastEditedUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class GetLastEditedUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetLastEditedUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetLastEditedUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetLastEditedUsingGetRequest extends SpeakeasyBase {
    queryParams: GetLastEditedUsingGetQueryParams;
}
export declare class GetLastEditedUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLastEditedUsingGET200ApplicationJSONObject?: GetLastEditedUsingGet200ApplicationJson;
    getLastEditedUsingGET400ApplicationJSONObject?: GetLastEditedUsingGet400ApplicationJson;
    getLastEditedUsingGET401ApplicationJSONObject?: GetLastEditedUsingGet401ApplicationJson;
    getLastEditedUsingGET500ApplicationJSONObject?: GetLastEditedUsingGet500ApplicationJson;
}
