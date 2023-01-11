import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSavedRevisionsCountUsingPostQueryParams extends SpeakeasyBase {
    padID?: string;
}
export declare class GetSavedRevisionsCountUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetSavedRevisionsCountUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetSavedRevisionsCountUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetSavedRevisionsCountUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetSavedRevisionsCountUsingPostRequest extends SpeakeasyBase {
    queryParams: GetSavedRevisionsCountUsingPostQueryParams;
}
export declare class GetSavedRevisionsCountUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getSavedRevisionsCountUsingPOST200ApplicationJSONObject?: GetSavedRevisionsCountUsingPost200ApplicationJson;
    getSavedRevisionsCountUsingPOST400ApplicationJSONObject?: GetSavedRevisionsCountUsingPost400ApplicationJson;
    getSavedRevisionsCountUsingPOST401ApplicationJSONObject?: GetSavedRevisionsCountUsingPost401ApplicationJson;
    getSavedRevisionsCountUsingPOST500ApplicationJSONObject?: GetSavedRevisionsCountUsingPost500ApplicationJson;
}
