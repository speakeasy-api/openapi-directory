import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAnalysisSummaryPathParams extends SpeakeasyBase {
    analysisSlug: string;
    projectSlug: string;
    username: string;
}
export declare class GetAnalysisSummaryRequest extends SpeakeasyBase {
    pathParams: GetAnalysisSummaryPathParams;
}
export declare class GetAnalysisSummaryResponse extends SpeakeasyBase {
    analysisDetail?: shared.AnalysisDetail;
    contentType: string;
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
}
