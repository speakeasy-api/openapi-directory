import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetReportsForCommitRequest extends SpeakeasyBase {
    /**
     * The commit for which to retrieve reports.
     */
    commit: string;
    /**
     * The repository.
     */
    repoSlug: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.
     */
    workspace: string;
}
export declare class GetReportsForCommitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    paginatedReports?: shared.PaginatedReports;
}
