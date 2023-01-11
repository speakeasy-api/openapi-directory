import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSavedRevisionsCountUsingGetQueryParams extends SpeakeasyBase {
    padID?: string;
}
export declare class GetSavedRevisionsCountUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetSavedRevisionsCountUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetSavedRevisionsCountUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetSavedRevisionsCountUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetSavedRevisionsCountUsingGetRequest extends SpeakeasyBase {
    queryParams: GetSavedRevisionsCountUsingGetQueryParams;
}
export declare class GetSavedRevisionsCountUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getSavedRevisionsCountUsingGET200ApplicationJSONObject?: GetSavedRevisionsCountUsingGet200ApplicationJson;
    getSavedRevisionsCountUsingGET400ApplicationJSONObject?: GetSavedRevisionsCountUsingGet400ApplicationJson;
    getSavedRevisionsCountUsingGET401ApplicationJSONObject?: GetSavedRevisionsCountUsingGet401ApplicationJson;
    getSavedRevisionsCountUsingGET500ApplicationJSONObject?: GetSavedRevisionsCountUsingGet500ApplicationJson;
}
