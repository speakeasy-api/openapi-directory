import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePadUsingPostQueryParams extends SpeakeasyBase {
    padID?: string;
}
export declare class DeletePadUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeletePadUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeletePadUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeletePadUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeletePadUsingPostRequest extends SpeakeasyBase {
    queryParams: DeletePadUsingPostQueryParams;
}
export declare class DeletePadUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deletePadUsingPOST200ApplicationJSONObject?: DeletePadUsingPost200ApplicationJson;
    deletePadUsingPOST400ApplicationJSONObject?: DeletePadUsingPost400ApplicationJson;
    deletePadUsingPOST401ApplicationJSONObject?: DeletePadUsingPost401ApplicationJson;
    deletePadUsingPOST500ApplicationJSONObject?: DeletePadUsingPost500ApplicationJson;
}
