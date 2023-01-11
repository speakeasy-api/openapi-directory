import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUrlsExportsPathParams extends SpeakeasyBase {
    analysisSlug: string;
    projectSlug: string;
    username: string;
}
export declare class GetUrlsExportsQueryParams extends SpeakeasyBase {
    page?: number;
    size?: number;
}
export declare class GetUrlsExports200ApplicationJson extends SpeakeasyBase {
    count?: number;
    next?: string;
    page?: number;
    previous?: string;
    results?: shared.CsvExportStatus[];
    size?: number;
}
export declare class GetUrlsExportsRequest extends SpeakeasyBase {
    pathParams: GetUrlsExportsPathParams;
    queryParams: GetUrlsExportsQueryParams;
}
export declare class GetUrlsExportsResponse extends SpeakeasyBase {
    contentType: string;
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    getUrlsExports200ApplicationJSONObject?: GetUrlsExports200ApplicationJson;
}
