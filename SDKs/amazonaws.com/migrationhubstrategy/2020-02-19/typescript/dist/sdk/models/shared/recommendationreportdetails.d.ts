import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationReportStatusEnum } from "./recommendationreportstatusenum";
/**
 *  Contains detailed information about a recommendation report.
 */
export declare class RecommendationReportDetails extends SpeakeasyBase {
    completionTime?: Date;
    s3Bucket?: string;
    s3Keys?: string[];
    startTime?: Date;
    status?: RecommendationReportStatusEnum;
    statusMessage?: string;
}
