import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateDiffHtmlUsingPostQueryParams extends SpeakeasyBase {
    endRev?: string;
    padID?: string;
    startRev?: string;
}
export declare class CreateDiffHtmlUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateDiffHtmlUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateDiffHtmlUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateDiffHtmlUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateDiffHtmlUsingPostRequest extends SpeakeasyBase {
    queryParams: CreateDiffHtmlUsingPostQueryParams;
}
export declare class CreateDiffHtmlUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createDiffHTMLUsingPOST200ApplicationJSONObject?: CreateDiffHtmlUsingPost200ApplicationJson;
    createDiffHTMLUsingPOST400ApplicationJSONObject?: CreateDiffHtmlUsingPost400ApplicationJson;
    createDiffHTMLUsingPOST401ApplicationJSONObject?: CreateDiffHtmlUsingPost401ApplicationJson;
    createDiffHTMLUsingPOST500ApplicationJSONObject?: CreateDiffHtmlUsingPost500ApplicationJson;
}
