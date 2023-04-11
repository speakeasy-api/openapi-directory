import { SpeakeasyBase } from "../../../internal/utils";
import { ChildPolicyEnum } from "./childpolicyenum";
import { TaskList } from "./tasklist";
import { WorkflowExecution } from "./workflowexecution";
import { WorkflowType } from "./workflowtype";
/**
 * Provides details of <code>WorkflowExecutionStarted</code> event.
 */
export declare class WorkflowExecutionStartedEventAttributes extends SpeakeasyBase {
    childPolicy: ChildPolicyEnum;
    continuedExecutionRunId?: string;
    executionStartToCloseTimeout?: string;
    input?: string;
    lambdaRole?: string;
    parentInitiatedEventId?: number;
    parentWorkflowExecution?: WorkflowExecution;
    tagList?: string[];
    taskList: TaskList;
    taskPriority?: string;
    taskStartToCloseTimeout?: string;
    workflowType: WorkflowType;
}
