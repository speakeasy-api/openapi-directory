import { SpeakeasyBase } from "../../../internal/utils";
import { AnalysisResult } from "./analysisresult";
/**
 * Success
 */
export declare class GetDetectorModelAnalysisResultsResponse extends SpeakeasyBase {
    analysisResults?: AnalysisResult[];
    nextToken?: string;
}
