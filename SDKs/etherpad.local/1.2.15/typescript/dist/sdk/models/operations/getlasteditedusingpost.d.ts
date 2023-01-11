import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetLastEditedUsingPostQueryParams extends SpeakeasyBase {
    padID?: string;
}
export declare class GetLastEditedUsingPost200ApplicationJsonData extends SpeakeasyBase {
    lastEdited?: number;
}
export declare class GetLastEditedUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetLastEditedUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class GetLastEditedUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetLastEditedUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetLastEditedUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetLastEditedUsingPostRequest extends SpeakeasyBase {
    queryParams: GetLastEditedUsingPostQueryParams;
}
export declare class GetLastEditedUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLastEditedUsingPOST200ApplicationJSONObject?: GetLastEditedUsingPost200ApplicationJson;
    getLastEditedUsingPOST400ApplicationJSONObject?: GetLastEditedUsingPost400ApplicationJson;
    getLastEditedUsingPOST401ApplicationJSONObject?: GetLastEditedUsingPost401ApplicationJson;
    getLastEditedUsingPOST500ApplicationJSONObject?: GetLastEditedUsingPost500ApplicationJson;
}
