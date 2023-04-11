import { SpeakeasyBase } from "../../../internal/utils";
import { CloseStatusFilter } from "./closestatusfilter";
import { ExecutionTimeFilter } from "./executiontimefilter";
import { TagFilter } from "./tagfilter";
import { WorkflowExecutionFilter } from "./workflowexecutionfilter";
import { WorkflowTypeFilter } from "./workflowtypefilter";
export declare class CountClosedWorkflowExecutionsInput extends SpeakeasyBase {
    closeStatusFilter?: CloseStatusFilter;
    closeTimeFilter?: ExecutionTimeFilter;
    domain: string;
    executionFilter?: WorkflowExecutionFilter;
    startTimeFilter?: ExecutionTimeFilter;
    tagFilter?: TagFilter;
    typeFilter?: WorkflowTypeFilter;
}
