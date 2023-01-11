import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreatePadUsingPostQueryParams extends SpeakeasyBase {
    padID?: string;
    text?: string;
}
export declare class CreatePadUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreatePadUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreatePadUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreatePadUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreatePadUsingPostRequest extends SpeakeasyBase {
    queryParams: CreatePadUsingPostQueryParams;
}
export declare class CreatePadUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createPadUsingPOST200ApplicationJSONObject?: CreatePadUsingPost200ApplicationJson;
    createPadUsingPOST400ApplicationJSONObject?: CreatePadUsingPost400ApplicationJson;
    createPadUsingPOST401ApplicationJSONObject?: CreatePadUsingPost401ApplicationJson;
    createPadUsingPOST500ApplicationJSONObject?: CreatePadUsingPost500ApplicationJson;
}
