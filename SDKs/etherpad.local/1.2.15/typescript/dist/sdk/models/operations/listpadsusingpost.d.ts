import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListPadsUsingPostQueryParams extends SpeakeasyBase {
    groupID?: string;
}
export declare class ListPadsUsingPost200ApplicationJsonData extends SpeakeasyBase {
    padIDs?: string[];
}
export declare class ListPadsUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListPadsUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class ListPadsUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListPadsUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListPadsUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListPadsUsingPostRequest extends SpeakeasyBase {
    queryParams: ListPadsUsingPostQueryParams;
}
export declare class ListPadsUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listPadsUsingPOST200ApplicationJSONObject?: ListPadsUsingPost200ApplicationJson;
    listPadsUsingPOST400ApplicationJSONObject?: ListPadsUsingPost400ApplicationJson;
    listPadsUsingPOST401ApplicationJSONObject?: ListPadsUsingPost401ApplicationJson;
    listPadsUsingPOST500ApplicationJSONObject?: ListPadsUsingPost500ApplicationJson;
}
