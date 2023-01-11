import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAttributePoolUsingPostQueryParams extends SpeakeasyBase {
    padID?: string;
}
export declare class GetAttributePoolUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetAttributePoolUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetAttributePoolUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetAttributePoolUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetAttributePoolUsingPostRequest extends SpeakeasyBase {
    queryParams: GetAttributePoolUsingPostQueryParams;
}
export declare class GetAttributePoolUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAttributePoolUsingPOST200ApplicationJSONObject?: GetAttributePoolUsingPost200ApplicationJson;
    getAttributePoolUsingPOST400ApplicationJSONObject?: GetAttributePoolUsingPost400ApplicationJson;
    getAttributePoolUsingPOST401ApplicationJSONObject?: GetAttributePoolUsingPost401ApplicationJson;
    getAttributePoolUsingPOST500ApplicationJSONObject?: GetAttributePoolUsingPost500ApplicationJson;
}
