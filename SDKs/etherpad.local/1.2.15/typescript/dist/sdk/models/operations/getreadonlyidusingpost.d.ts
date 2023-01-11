import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetReadOnlyIdUsingPostQueryParams extends SpeakeasyBase {
    padID?: string;
}
export declare class GetReadOnlyIdUsingPost200ApplicationJsonData extends SpeakeasyBase {
    readOnlyID?: string;
}
export declare class GetReadOnlyIdUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: GetReadOnlyIdUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class GetReadOnlyIdUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetReadOnlyIdUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetReadOnlyIdUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetReadOnlyIdUsingPostRequest extends SpeakeasyBase {
    queryParams: GetReadOnlyIdUsingPostQueryParams;
}
export declare class GetReadOnlyIdUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getReadOnlyIDUsingPOST200ApplicationJSONObject?: GetReadOnlyIdUsingPost200ApplicationJson;
    getReadOnlyIDUsingPOST400ApplicationJSONObject?: GetReadOnlyIdUsingPost400ApplicationJson;
    getReadOnlyIDUsingPOST401ApplicationJSONObject?: GetReadOnlyIdUsingPost401ApplicationJson;
    getReadOnlyIDUsingPOST500ApplicationJSONObject?: GetReadOnlyIdUsingPost500ApplicationJson;
}
