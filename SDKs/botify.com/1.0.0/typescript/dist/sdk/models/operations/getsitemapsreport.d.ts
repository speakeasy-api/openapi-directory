import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSitemapsReportPathParams extends SpeakeasyBase {
    analysisSlug: string;
    projectSlug: string;
    username: string;
}
export declare class GetSitemapsReportRequest extends SpeakeasyBase {
    pathParams: GetSitemapsReportPathParams;
}
export declare class GetSitemapsReportResponse extends SpeakeasyBase {
    contentType: string;
    defaultPayload?: shared.DefaultPayload;
    sitemapsReport?: shared.SitemapsReport;
    statusCode: number;
}
