import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRevisionsCountUsingPostQueryParams extends SpeakeasyBase {
    padID?: string;
}
export declare class GetRevisionsCountUsingPost200ApplicationJsonData extends SpeakeasyBase {
    revisions?: number;
}
export declare class GetRevisionsCountUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetRevisionsCountUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class GetRevisionsCountUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetRevisionsCountUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetRevisionsCountUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetRevisionsCountUsingPostRequest extends SpeakeasyBase {
    queryParams: GetRevisionsCountUsingPostQueryParams;
}
export declare class GetRevisionsCountUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getRevisionsCountUsingPOST200ApplicationJSONObject?: GetRevisionsCountUsingPost200ApplicationJson;
    getRevisionsCountUsingPOST400ApplicationJSONObject?: GetRevisionsCountUsingPost400ApplicationJson;
    getRevisionsCountUsingPOST401ApplicationJSONObject?: GetRevisionsCountUsingPost401ApplicationJson;
    getRevisionsCountUsingPOST500ApplicationJSONObject?: GetRevisionsCountUsingPost500ApplicationJson;
}
