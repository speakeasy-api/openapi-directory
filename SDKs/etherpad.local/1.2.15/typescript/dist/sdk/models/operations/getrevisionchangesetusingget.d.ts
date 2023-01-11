import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRevisionChangesetUsingGetQueryParams extends SpeakeasyBase {
    padID?: string;
    rev?: string;
}
export declare class GetRevisionChangesetUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetRevisionChangesetUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetRevisionChangesetUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetRevisionChangesetUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetRevisionChangesetUsingGetRequest extends SpeakeasyBase {
    queryParams: GetRevisionChangesetUsingGetQueryParams;
}
export declare class GetRevisionChangesetUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getRevisionChangesetUsingGET200ApplicationJSONObject?: GetRevisionChangesetUsingGet200ApplicationJson;
    getRevisionChangesetUsingGET400ApplicationJSONObject?: GetRevisionChangesetUsingGet400ApplicationJson;
    getRevisionChangesetUsingGET401ApplicationJSONObject?: GetRevisionChangesetUsingGet401ApplicationJson;
    getRevisionChangesetUsingGET500ApplicationJSONObject?: GetRevisionChangesetUsingGet500ApplicationJson;
}
