import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListAllGroupsUsingPost200ApplicationJsonData extends SpeakeasyBase {
    groupIDs?: string[];
}
export declare class ListAllGroupsUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListAllGroupsUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class ListAllGroupsUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListAllGroupsUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListAllGroupsUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListAllGroupsUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listAllGroupsUsingPOST200ApplicationJSONObject?: ListAllGroupsUsingPost200ApplicationJson;
    listAllGroupsUsingPOST400ApplicationJSONObject?: ListAllGroupsUsingPost400ApplicationJson;
    listAllGroupsUsingPOST401ApplicationJSONObject?: ListAllGroupsUsingPost401ApplicationJson;
    listAllGroupsUsingPOST500ApplicationJSONObject?: ListAllGroupsUsingPost500ApplicationJson;
}
