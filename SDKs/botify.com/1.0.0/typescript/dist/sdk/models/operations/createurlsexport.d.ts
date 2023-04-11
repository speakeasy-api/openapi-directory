import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateUrlsExportAreaEnum {
    Current = "current",
    Disappeared = "disappeared",
    New = "new",
    SearchEnginesOrphans = "search_engines_orphans"
}
export declare class CreateUrlsExportRequest extends SpeakeasyBase {
    urlsQuery?: shared.UrlsQuery;
    /**
     * Analysis' identifier
     */
    analysisSlug: string;
    area?: CreateUrlsExportAreaEnum;
    /**
     * Project's identifier
     */
    projectSlug: string;
    /**
     * User's identifier
     */
    username: string;
}
export declare class CreateUrlsExportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    csvExportStatus?: shared.CsvExportStatus;
    /**
     * error payload
     */
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
