import { SpeakeasyBase } from "../../../internal/utils";
import { AntipatternReportStatusEnum } from "./antipatternreportstatusenum";
import { AntipatternSeveritySummary } from "./antipatternseveritysummary";
import { RecommendationSet } from "./recommendationset";
import { RunTimeAssessmentStatusEnum } from "./runtimeassessmentstatusenum";
import { S3Object } from "./s3object";
import { ServerError } from "./servererror";
import { StrategySummary } from "./strategysummary";
import { SystemInfo } from "./systeminfo";
/**
 *  Detailed information about a server.
 */
export declare class ServerDetail extends SpeakeasyBase {
    antipatternReportS3Object?: S3Object;
    antipatternReportStatus?: AntipatternReportStatusEnum;
    antipatternReportStatusMessage?: string;
    applicationComponentStrategySummary?: StrategySummary[];
    dataCollectionStatus?: RunTimeAssessmentStatusEnum;
    id?: string;
    lastAnalyzedTimestamp?: Date;
    listAntipatternSeveritySummary?: AntipatternSeveritySummary[];
    name?: string;
    recommendationSet?: RecommendationSet;
    serverError?: ServerError;
    serverType?: string;
    statusMessage?: string;
    systemInfo?: SystemInfo;
}
