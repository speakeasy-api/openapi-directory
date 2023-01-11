import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetReportPathParams extends SpeakeasyBase {
    commit: string;
    repoSlug: string;
    reportId: string;
    workspace: string;
}
export declare class GetReportRequest extends SpeakeasyBase {
    pathParams: GetReportPathParams;
}
export declare class GetReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Record<string, any>;
    report?: Record<string, any>;
}
