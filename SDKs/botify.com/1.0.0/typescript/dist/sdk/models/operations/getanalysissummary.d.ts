import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAnalysisSummaryRequest extends SpeakeasyBase {
    /**
     * Analysis' identifier
     */
    analysisSlug: string;
    /**
     * Project's identifier
     */
    projectSlug: string;
    /**
     * User's identifier
     */
    username: string;
}
export declare class GetAnalysisSummaryResponse extends SpeakeasyBase {
    /**
     * Successful operation
     */
    analysisDetail?: shared.AnalysisDetail;
    contentType: string;
    /**
     * error payload
     */
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
