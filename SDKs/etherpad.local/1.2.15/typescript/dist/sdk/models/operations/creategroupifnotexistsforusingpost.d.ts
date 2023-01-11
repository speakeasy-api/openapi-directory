import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateGroupIfNotExistsForUsingPostQueryParams extends SpeakeasyBase {
    groupMapper?: string;
}
export declare class CreateGroupIfNotExistsForUsingPost200ApplicationJsonData extends SpeakeasyBase {
    groupID?: string;
}
export declare class CreateGroupIfNotExistsForUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: CreateGroupIfNotExistsForUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class CreateGroupIfNotExistsForUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupIfNotExistsForUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupIfNotExistsForUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupIfNotExistsForUsingPostRequest extends SpeakeasyBase {
    queryParams: CreateGroupIfNotExistsForUsingPostQueryParams;
}
export declare class CreateGroupIfNotExistsForUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createGroupIfNotExistsForUsingPOST200ApplicationJSONObject?: CreateGroupIfNotExistsForUsingPost200ApplicationJson;
    createGroupIfNotExistsForUsingPOST400ApplicationJSONObject?: CreateGroupIfNotExistsForUsingPost400ApplicationJson;
    createGroupIfNotExistsForUsingPOST401ApplicationJSONObject?: CreateGroupIfNotExistsForUsingPost401ApplicationJson;
    createGroupIfNotExistsForUsingPOST500ApplicationJSONObject?: CreateGroupIfNotExistsForUsingPost500ApplicationJson;
}
