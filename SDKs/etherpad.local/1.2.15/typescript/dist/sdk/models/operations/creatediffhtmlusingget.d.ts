import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateDiffHtmlUsingGetQueryParams extends SpeakeasyBase {
    endRev?: string;
    padID?: string;
    startRev?: string;
}
export declare class CreateDiffHtmlUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateDiffHtmlUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateDiffHtmlUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateDiffHtmlUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateDiffHtmlUsingGetRequest extends SpeakeasyBase {
    queryParams: CreateDiffHtmlUsingGetQueryParams;
}
export declare class CreateDiffHtmlUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createDiffHTMLUsingGET200ApplicationJSONObject?: CreateDiffHtmlUsingGet200ApplicationJson;
    createDiffHTMLUsingGET400ApplicationJSONObject?: CreateDiffHtmlUsingGet400ApplicationJson;
    createDiffHTMLUsingGET401ApplicationJSONObject?: CreateDiffHtmlUsingGet401ApplicationJson;
    createDiffHTMLUsingGET500ApplicationJSONObject?: CreateDiffHtmlUsingGet500ApplicationJson;
}
