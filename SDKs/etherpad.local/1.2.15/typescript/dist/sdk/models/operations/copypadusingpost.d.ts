import { SpeakeasyBase } from "../../../internal/utils";
export declare class CopyPadUsingPostQueryParams extends SpeakeasyBase {
    destinationID?: string;
    force?: string;
    sourceID?: string;
}
export declare class CopyPadUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CopyPadUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CopyPadUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CopyPadUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CopyPadUsingPostRequest extends SpeakeasyBase {
    queryParams: CopyPadUsingPostQueryParams;
}
export declare class CopyPadUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    copyPadUsingPOST200ApplicationJSONObject?: CopyPadUsingPost200ApplicationJson;
    copyPadUsingPOST400ApplicationJSONObject?: CopyPadUsingPost400ApplicationJson;
    copyPadUsingPOST401ApplicationJSONObject?: CopyPadUsingPost401ApplicationJson;
    copyPadUsingPOST500ApplicationJSONObject?: CopyPadUsingPost500ApplicationJson;
}
