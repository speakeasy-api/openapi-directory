import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateGroupPadUsingGetQueryParams extends SpeakeasyBase {
    groupID?: string;
    padName?: string;
    text?: string;
}
export declare class CreateGroupPadUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupPadUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupPadUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupPadUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupPadUsingGetRequest extends SpeakeasyBase {
    queryParams: CreateGroupPadUsingGetQueryParams;
}
export declare class CreateGroupPadUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createGroupPadUsingGET200ApplicationJSONObject?: CreateGroupPadUsingGet200ApplicationJson;
    createGroupPadUsingGET400ApplicationJSONObject?: CreateGroupPadUsingGet400ApplicationJson;
    createGroupPadUsingGET401ApplicationJSONObject?: CreateGroupPadUsingGet401ApplicationJson;
    createGroupPadUsingGET500ApplicationJSONObject?: CreateGroupPadUsingGet500ApplicationJson;
}
