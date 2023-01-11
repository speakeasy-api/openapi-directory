import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateUrlsExportPathParams extends SpeakeasyBase {
    analysisSlug: string;
    projectSlug: string;
    username: string;
}
export declare enum CreateUrlsExportAreaEnum {
    Current = "current",
    Disappeared = "disappeared",
    New = "new",
    SearchEnginesOrphans = "search_engines_orphans"
}
export declare class CreateUrlsExportQueryParams extends SpeakeasyBase {
    area?: CreateUrlsExportAreaEnum;
}
export declare class CreateUrlsExportRequest extends SpeakeasyBase {
    pathParams: CreateUrlsExportPathParams;
    queryParams: CreateUrlsExportQueryParams;
    request?: shared.UrlsQuery;
}
export declare class CreateUrlsExportResponse extends SpeakeasyBase {
    contentType: string;
    csvExportStatus?: shared.CsvExportStatus;
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
}
