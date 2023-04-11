import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLJobSecondaryStatusEnum } from "./automljobsecondarystatusenum";
import { AutoMLJobStatusEnum } from "./automljobstatusenum";
import { AutoMLPartialFailureReason } from "./automlpartialfailurereason";
/**
 * Provides a summary about an AutoML job.
 */
export declare class AutoMLJobSummary extends SpeakeasyBase {
    autoMLJobArn: string;
    autoMLJobName: string;
    autoMLJobSecondaryStatus: AutoMLJobSecondaryStatusEnum;
    autoMLJobStatus: AutoMLJobStatusEnum;
    creationTime: Date;
    endTime?: Date;
    failureReason?: string;
    lastModifiedTime: Date;
    partialFailureReasons?: AutoMLPartialFailureReason[];
}
