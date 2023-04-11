import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteReportRequest extends SpeakeasyBase {
    /**
     * The commit the report belongs to.
     */
    commit: string;
    /**
     * The repository.
     */
    repoSlug: string;
    /**
     * Either the uuid or external-id of the report.
     */
    reportId: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.
     */
    workspace: string;
}
export declare class DeleteReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
