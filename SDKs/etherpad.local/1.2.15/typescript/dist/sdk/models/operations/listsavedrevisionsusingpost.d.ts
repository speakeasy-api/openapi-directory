import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListSavedRevisionsUsingPostQueryParams extends SpeakeasyBase {
    padID?: string;
}
export declare class ListSavedRevisionsUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSavedRevisionsUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSavedRevisionsUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSavedRevisionsUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSavedRevisionsUsingPostRequest extends SpeakeasyBase {
    queryParams: ListSavedRevisionsUsingPostQueryParams;
}
export declare class ListSavedRevisionsUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listSavedRevisionsUsingPOST200ApplicationJSONObject?: ListSavedRevisionsUsingPost200ApplicationJson;
    listSavedRevisionsUsingPOST400ApplicationJSONObject?: ListSavedRevisionsUsingPost400ApplicationJson;
    listSavedRevisionsUsingPOST401ApplicationJSONObject?: ListSavedRevisionsUsingPost401ApplicationJson;
    listSavedRevisionsUsingPOST500ApplicationJSONObject?: ListSavedRevisionsUsingPost500ApplicationJson;
}
