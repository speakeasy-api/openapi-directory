import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetWorkflowInAttemptRequestBody extends SpeakeasyBase {
    attemptNumber: number;
    jobId: number;
    processingTaskQueue?: string;
    workflowId: string;
}
