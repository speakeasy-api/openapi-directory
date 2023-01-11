import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetPublicStatusUsingPostQueryParams extends SpeakeasyBase {
    padID?: string;
    publicStatus?: string;
}
export declare class SetPublicStatusUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetPublicStatusUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetPublicStatusUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetPublicStatusUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SetPublicStatusUsingPostRequest extends SpeakeasyBase {
    queryParams: SetPublicStatusUsingPostQueryParams;
}
export declare class SetPublicStatusUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setPublicStatusUsingPOST200ApplicationJSONObject?: SetPublicStatusUsingPost200ApplicationJson;
    setPublicStatusUsingPOST400ApplicationJSONObject?: SetPublicStatusUsingPost400ApplicationJson;
    setPublicStatusUsingPOST401ApplicationJSONObject?: SetPublicStatusUsingPost401ApplicationJson;
    setPublicStatusUsingPOST500ApplicationJSONObject?: SetPublicStatusUsingPost500ApplicationJson;
}
