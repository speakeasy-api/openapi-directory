import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetReportRequest extends SpeakeasyBase {
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
export declare class GetReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The report with the given ID was not found.
     */
    error?: Record<string, any>;
    /**
     * OK
     */
    report?: Record<string, any>;
}
