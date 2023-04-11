import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAnnotationsForReportRequest extends SpeakeasyBase {
    /**
     * The commit for which to retrieve reports.
     */
    commit: string;
    /**
     * The repository.
     */
    repoSlug: string;
    /**
     * Uuid or external-if of the report for which to get annotations for.
     */
    reportId: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.
     */
    workspace: string;
}
export declare class GetAnnotationsForReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    paginatedAnnotations?: shared.PaginatedAnnotations;
}
