import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteGroupUsingPostQueryParams extends SpeakeasyBase {
    groupID?: string;
}
export declare class DeleteGroupUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeleteGroupUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeleteGroupUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeleteGroupUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeleteGroupUsingPostRequest extends SpeakeasyBase {
    queryParams: DeleteGroupUsingPostQueryParams;
}
export declare class DeleteGroupUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteGroupUsingPOST200ApplicationJSONObject?: DeleteGroupUsingPost200ApplicationJson;
    deleteGroupUsingPOST400ApplicationJSONObject?: DeleteGroupUsingPost400ApplicationJson;
    deleteGroupUsingPOST401ApplicationJSONObject?: DeleteGroupUsingPost401ApplicationJson;
    deleteGroupUsingPOST500ApplicationJSONObject?: DeleteGroupUsingPost500ApplicationJson;
}
