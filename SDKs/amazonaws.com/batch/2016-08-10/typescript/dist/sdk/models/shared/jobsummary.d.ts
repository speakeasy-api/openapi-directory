import { SpeakeasyBase } from "../../../internal/utils";
import { ArrayPropertiesSummary } from "./arraypropertiessummary";
import { ContainerSummary } from "./containersummary";
import { JobStatusEnum } from "./jobstatusenum";
import { NodePropertiesSummary } from "./nodepropertiessummary";
/**
 * An object that represents summary details of a job.
 */
export declare class JobSummary extends SpeakeasyBase {
    arrayProperties?: ArrayPropertiesSummary;
    container?: ContainerSummary;
    createdAt?: number;
    jobArn?: string;
    jobDefinition?: string;
    jobId: string;
    jobName: string;
    nodeProperties?: NodePropertiesSummary;
    startedAt?: number;
    status?: JobStatusEnum;
    statusReason?: string;
    stoppedAt?: number;
}
