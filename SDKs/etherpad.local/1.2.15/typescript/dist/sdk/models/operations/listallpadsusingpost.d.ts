import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListAllPadsUsingPost200ApplicationJsonData extends SpeakeasyBase {
    padIDs?: string[];
}
export declare class ListAllPadsUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListAllPadsUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class ListAllPadsUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListAllPadsUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListAllPadsUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListAllPadsUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listAllPadsUsingPOST200ApplicationJSONObject?: ListAllPadsUsingPost200ApplicationJson;
    listAllPadsUsingPOST400ApplicationJSONObject?: ListAllPadsUsingPost400ApplicationJson;
    listAllPadsUsingPOST401ApplicationJSONObject?: ListAllPadsUsingPost401ApplicationJson;
    listAllPadsUsingPOST500ApplicationJSONObject?: ListAllPadsUsingPost500ApplicationJson;
}
