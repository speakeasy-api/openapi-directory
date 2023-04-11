import { SpeakeasyBase } from "../../../internal/utils";
import { BatchPolicy } from "./batchpolicy";
import { FailedCreateSimulationJobRequest } from "./failedcreatesimulationjobrequest";
import { SimulationJobBatchErrorCodeEnum } from "./simulationjobbatcherrorcodeenum";
import { SimulationJobBatchStatusEnum } from "./simulationjobbatchstatusenum";
import { SimulationJobRequest } from "./simulationjobrequest";
import { SimulationJobSummary } from "./simulationjobsummary";
/**
 * Success
 */
export declare class DescribeSimulationJobBatchResponse extends SpeakeasyBase {
    arn?: string;
    batchPolicy?: BatchPolicy;
    clientRequestToken?: string;
    createdAt?: Date;
    createdRequests?: SimulationJobSummary[];
    failedRequests?: FailedCreateSimulationJobRequest[];
    failureCode?: SimulationJobBatchErrorCodeEnum;
    failureReason?: string;
    lastUpdatedAt?: Date;
    pendingRequests?: SimulationJobRequest[];
    status?: SimulationJobBatchStatusEnum;
    tags?: Record<string, string>;
}
