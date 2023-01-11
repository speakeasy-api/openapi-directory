import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateOrUpdateReportPathParams extends SpeakeasyBase {
    commit: string;
    repoSlug: string;
    reportId: string;
    workspace: string;
}
export declare class CreateOrUpdateReportRequest extends SpeakeasyBase {
    pathParams: CreateOrUpdateReportPathParams;
    request: Record<string, any>;
}
export declare class CreateOrUpdateReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Record<string, any>;
    report?: Record<string, any>;
}
