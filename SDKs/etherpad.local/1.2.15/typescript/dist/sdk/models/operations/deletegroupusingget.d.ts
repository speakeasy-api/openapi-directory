import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteGroupUsingGetQueryParams extends SpeakeasyBase {
    groupID?: string;
}
export declare class DeleteGroupUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeleteGroupUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeleteGroupUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeleteGroupUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeleteGroupUsingGetRequest extends SpeakeasyBase {
    queryParams: DeleteGroupUsingGetQueryParams;
}
export declare class DeleteGroupUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteGroupUsingGET200ApplicationJSONObject?: DeleteGroupUsingGet200ApplicationJson;
    deleteGroupUsingGET400ApplicationJSONObject?: DeleteGroupUsingGet400ApplicationJson;
    deleteGroupUsingGET401ApplicationJSONObject?: DeleteGroupUsingGet401ApplicationJson;
    deleteGroupUsingGET500ApplicationJSONObject?: DeleteGroupUsingGet500ApplicationJson;
}
