import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateGroupUsingPost200ApplicationJsonData extends SpeakeasyBase {
    groupID?: string;
}
export declare class CreateGroupUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: CreateGroupUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class CreateGroupUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createGroupUsingPOST200ApplicationJSONObject?: CreateGroupUsingPost200ApplicationJson;
    createGroupUsingPOST400ApplicationJSONObject?: CreateGroupUsingPost400ApplicationJson;
    createGroupUsingPOST401ApplicationJSONObject?: CreateGroupUsingPost401ApplicationJson;
    createGroupUsingPOST500ApplicationJSONObject?: CreateGroupUsingPost500ApplicationJson;
}
