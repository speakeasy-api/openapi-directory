import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRevisionsCountUsingGetQueryParams extends SpeakeasyBase {
    padID?: string;
}
export declare class GetRevisionsCountUsingGet200ApplicationJsonData extends SpeakeasyBase {
    revisions?: number;
}
export declare class GetRevisionsCountUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetRevisionsCountUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class GetRevisionsCountUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetRevisionsCountUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetRevisionsCountUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetRevisionsCountUsingGetRequest extends SpeakeasyBase {
    queryParams: GetRevisionsCountUsingGetQueryParams;
}
export declare class GetRevisionsCountUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getRevisionsCountUsingGET200ApplicationJSONObject?: GetRevisionsCountUsingGet200ApplicationJson;
    getRevisionsCountUsingGET400ApplicationJSONObject?: GetRevisionsCountUsingGet400ApplicationJson;
    getRevisionsCountUsingGET401ApplicationJSONObject?: GetRevisionsCountUsingGet401ApplicationJson;
    getRevisionsCountUsingGET500ApplicationJSONObject?: GetRevisionsCountUsingGet500ApplicationJson;
}
