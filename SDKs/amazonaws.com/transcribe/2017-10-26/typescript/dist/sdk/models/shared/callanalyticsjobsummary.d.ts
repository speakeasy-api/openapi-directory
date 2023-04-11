import { SpeakeasyBase } from "../../../internal/utils";
import { CallAnalyticsJobStatusEnum } from "./callanalyticsjobstatusenum";
import { LanguageCodeEnum } from "./languagecodeenum";
/**
 * Provides detailed information about a specific Call Analytics job.
 */
export declare class CallAnalyticsJobSummary extends SpeakeasyBase {
    callAnalyticsJobName?: string;
    callAnalyticsJobStatus?: CallAnalyticsJobStatusEnum;
    completionTime?: Date;
    creationTime?: Date;
    failureReason?: string;
    languageCode?: LanguageCodeEnum;
    startTime?: Date;
}
