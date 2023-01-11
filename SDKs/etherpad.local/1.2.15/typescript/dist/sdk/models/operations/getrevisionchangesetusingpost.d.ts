import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRevisionChangesetUsingPostQueryParams extends SpeakeasyBase {
    padID?: string;
    rev?: string;
}
export declare class GetRevisionChangesetUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetRevisionChangesetUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetRevisionChangesetUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetRevisionChangesetUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetRevisionChangesetUsingPostRequest extends SpeakeasyBase {
    queryParams: GetRevisionChangesetUsingPostQueryParams;
}
export declare class GetRevisionChangesetUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getRevisionChangesetUsingPOST200ApplicationJSONObject?: GetRevisionChangesetUsingPost200ApplicationJson;
    getRevisionChangesetUsingPOST400ApplicationJSONObject?: GetRevisionChangesetUsingPost400ApplicationJson;
    getRevisionChangesetUsingPOST401ApplicationJSONObject?: GetRevisionChangesetUsingPost401ApplicationJson;
    getRevisionChangesetUsingPOST500ApplicationJSONObject?: GetRevisionChangesetUsingPost500ApplicationJson;
}
