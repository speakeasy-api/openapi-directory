import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionTimeFilter } from "./executiontimefilter";
import { TagFilter } from "./tagfilter";
import { WorkflowExecutionFilter } from "./workflowexecutionfilter";
import { WorkflowTypeFilter } from "./workflowtypefilter";
export declare class ListOpenWorkflowExecutionsInput extends SpeakeasyBase {
    domain: string;
    executionFilter?: WorkflowExecutionFilter;
    maximumPageSize?: number;
    nextPageToken?: string;
    reverseOrder?: boolean;
    startTimeFilter: ExecutionTimeFilter;
    tagFilter?: TagFilter;
    typeFilter?: WorkflowTypeFilter;
}
