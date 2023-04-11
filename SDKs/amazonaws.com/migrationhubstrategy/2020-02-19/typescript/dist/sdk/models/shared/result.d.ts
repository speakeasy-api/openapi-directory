import { SpeakeasyBase } from "../../../internal/utils";
import { AnalysisStatusUnion } from "./analysisstatusunion";
import { AnalysisTypeEnum } from "./analysistypeenum";
import { AntipatternReportResult } from "./antipatternreportresult";
/**
 * The error in server analysis.
 */
export declare class Result extends SpeakeasyBase {
    analysisStatus?: AnalysisStatusUnion;
    analysisType?: AnalysisTypeEnum;
    antipatternReportResultList?: AntipatternReportResult[];
    statusMessage?: string;
}
