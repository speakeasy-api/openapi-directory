import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateGroupPadUsingPostQueryParams extends SpeakeasyBase {
    groupID?: string;
    padName?: string;
    text?: string;
}
export declare class CreateGroupPadUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupPadUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupPadUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupPadUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupPadUsingPostRequest extends SpeakeasyBase {
    queryParams: CreateGroupPadUsingPostQueryParams;
}
export declare class CreateGroupPadUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createGroupPadUsingPOST200ApplicationJSONObject?: CreateGroupPadUsingPost200ApplicationJson;
    createGroupPadUsingPOST400ApplicationJSONObject?: CreateGroupPadUsingPost400ApplicationJson;
    createGroupPadUsingPOST401ApplicationJSONObject?: CreateGroupPadUsingPost401ApplicationJson;
    createGroupPadUsingPOST500ApplicationJSONObject?: CreateGroupPadUsingPost500ApplicationJson;
}
