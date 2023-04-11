import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyzerNameUnion } from "./analyzernameunion";
import { AntipatternReportStatusEnum } from "./antipatternreportstatusenum";
import { S3Object } from "./s3object";
/**
 * The anti-pattern report result.
 */
export declare class AntipatternReportResult extends SpeakeasyBase {
    analyzerName?: AnalyzerNameUnion;
    /**
     *  Contains the S3 bucket name and the Amazon S3 key name.
     */
    antiPatternReportS3Object?: S3Object;
    antipatternReportStatus?: AntipatternReportStatusEnum;
    antipatternReportStatusMessage?: string;
}
