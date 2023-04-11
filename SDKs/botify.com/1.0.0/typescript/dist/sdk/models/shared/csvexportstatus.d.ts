import { SpeakeasyBase } from "../../../internal/utils";
import { UrlsQuery } from "./urlsquery";
/**
 * Successful operation
 */
export declare class CsvExportStatus extends SpeakeasyBase {
    area?: number;
    dateCreated?: Date;
    jobId?: string;
    jobStatus?: string;
    jobUrl?: string;
    nbResults?: number;
    query: UrlsQuery;
    results?: string;
}
