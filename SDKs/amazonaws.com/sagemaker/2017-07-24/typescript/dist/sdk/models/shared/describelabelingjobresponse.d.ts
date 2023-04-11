import { SpeakeasyBase } from "../../../internal/utils";
import { HumanTaskConfig } from "./humantaskconfig";
import { LabelCounters } from "./labelcounters";
import { LabelingJobAlgorithmsConfig } from "./labelingjobalgorithmsconfig";
import { LabelingJobInputConfig } from "./labelingjobinputconfig";
import { LabelingJobOutput } from "./labelingjoboutput";
import { LabelingJobOutputConfig } from "./labelingjoboutputconfig";
import { LabelingJobStatusEnum } from "./labelingjobstatusenum";
import { LabelingJobStoppingConditions } from "./labelingjobstoppingconditions";
import { Tag } from "./tag";
/**
 * Success
 */
export declare class DescribeLabelingJobResponse extends SpeakeasyBase {
    creationTime: Date;
    failureReason?: string;
    humanTaskConfig: HumanTaskConfig;
    inputConfig: LabelingJobInputConfig;
    jobReferenceCode: string;
    labelAttributeName?: string;
    labelCategoryConfigS3Uri?: string;
    labelCounters: LabelCounters;
    labelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;
    labelingJobArn: string;
    labelingJobName: string;
    labelingJobOutput?: LabelingJobOutput;
    labelingJobStatus: LabelingJobStatusEnum;
    lastModifiedTime: Date;
    outputConfig: LabelingJobOutputConfig;
    roleArn: string;
    stoppingConditions?: LabelingJobStoppingConditions;
    tags?: Tag[];
}
