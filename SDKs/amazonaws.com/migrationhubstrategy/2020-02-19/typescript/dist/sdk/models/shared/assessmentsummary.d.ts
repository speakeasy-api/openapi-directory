import { SpeakeasyBase } from "../../../internal/utils";
import { AntipatternReportStatusEnum } from "./antipatternreportstatusenum";
import { AntipatternSeveritySummary } from "./antipatternseveritysummary";
import { ApplicationComponentStatusSummary } from "./applicationcomponentstatussummary";
import { ApplicationComponentSummary } from "./applicationcomponentsummary";
import { S3Object } from "./s3object";
import { ServerStatusSummary } from "./serverstatussummary";
import { ServerSummary } from "./serversummary";
import { StrategySummary } from "./strategysummary";
/**
 *  Contains the summary of the assessment results.
 */
export declare class AssessmentSummary extends SpeakeasyBase {
    antipatternReportS3Object?: S3Object;
    antipatternReportStatus?: AntipatternReportStatusEnum;
    antipatternReportStatusMessage?: string;
    lastAnalyzedTimestamp?: Date;
    listAntipatternSeveritySummary?: AntipatternSeveritySummary[];
    listApplicationComponentStatusSummary?: ApplicationComponentStatusSummary[];
    listApplicationComponentStrategySummary?: StrategySummary[];
    listApplicationComponentSummary?: ApplicationComponentSummary[];
    listServerStatusSummary?: ServerStatusSummary[];
    listServerStrategySummary?: StrategySummary[];
    listServerSummary?: ServerSummary[];
}
