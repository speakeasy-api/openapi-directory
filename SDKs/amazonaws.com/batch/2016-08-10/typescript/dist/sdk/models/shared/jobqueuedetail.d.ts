import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeEnvironmentOrder } from "./computeenvironmentorder";
import { JQStateEnum } from "./jqstateenum";
import { JQStatusEnum } from "./jqstatusenum";
/**
 * An object that represents the details for an Batch job queue.
 */
export declare class JobQueueDetail extends SpeakeasyBase {
    computeEnvironmentOrder: ComputeEnvironmentOrder[];
    jobQueueArn: string;
    jobQueueName: string;
    priority: number;
    schedulingPolicyArn?: string;
    state: JQStateEnum;
    status?: JQStatusEnum;
    statusReason?: string;
    tags?: Record<string, string>;
}
