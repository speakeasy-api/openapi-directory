import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePadUsingGetQueryParams extends SpeakeasyBase {
    padID?: string;
}
export declare class DeletePadUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeletePadUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeletePadUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeletePadUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeletePadUsingGetRequest extends SpeakeasyBase {
    queryParams: DeletePadUsingGetQueryParams;
}
export declare class DeletePadUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deletePadUsingGET200ApplicationJSONObject?: DeletePadUsingGet200ApplicationJson;
    deletePadUsingGET400ApplicationJSONObject?: DeletePadUsingGet400ApplicationJson;
    deletePadUsingGET401ApplicationJSONObject?: DeletePadUsingGet401ApplicationJson;
    deletePadUsingGET500ApplicationJSONObject?: DeletePadUsingGet500ApplicationJson;
}
