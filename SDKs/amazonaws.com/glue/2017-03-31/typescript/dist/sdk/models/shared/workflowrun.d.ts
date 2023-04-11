import { SpeakeasyBase } from "../../../internal/utils";
import { StartingEventBatchCondition } from "./startingeventbatchcondition";
import { WorkflowGraph } from "./workflowgraph";
import { WorkflowRunStatistics } from "./workflowrunstatistics";
import { WorkflowRunStatusEnum } from "./workflowrunstatusenum";
/**
 * A workflow run is an execution of a workflow providing all the runtime information.
 */
export declare class WorkflowRun extends SpeakeasyBase {
    completedOn?: Date;
    errorMessage?: string;
    graph?: WorkflowGraph;
    name?: string;
    previousRunId?: string;
    startedOn?: Date;
    startingEventBatchCondition?: StartingEventBatchCondition;
    statistics?: WorkflowRunStatistics;
    status?: WorkflowRunStatusEnum;
    workflowRunId?: string;
    workflowRunProperties?: Record<string, string>;
}
