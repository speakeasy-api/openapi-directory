import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListPadsOfAuthorUsingPostQueryParams extends SpeakeasyBase {
    authorID?: string;
}
export declare class ListPadsOfAuthorUsingPost200ApplicationJsonData extends SpeakeasyBase {
    padIDs?: string[];
}
export declare class ListPadsOfAuthorUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: ListPadsOfAuthorUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class ListPadsOfAuthorUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListPadsOfAuthorUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListPadsOfAuthorUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListPadsOfAuthorUsingPostRequest extends SpeakeasyBase {
    queryParams: ListPadsOfAuthorUsingPostQueryParams;
}
export declare class ListPadsOfAuthorUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listPadsOfAuthorUsingPOST200ApplicationJSONObject?: ListPadsOfAuthorUsingPost200ApplicationJson;
    listPadsOfAuthorUsingPOST400ApplicationJSONObject?: ListPadsOfAuthorUsingPost400ApplicationJson;
    listPadsOfAuthorUsingPOST401ApplicationJSONObject?: ListPadsOfAuthorUsingPost401ApplicationJson;
    listPadsOfAuthorUsingPOST500ApplicationJSONObject?: ListPadsOfAuthorUsingPost500ApplicationJson;
}
