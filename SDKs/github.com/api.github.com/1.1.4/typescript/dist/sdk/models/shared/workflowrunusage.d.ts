import { SpeakeasyBase } from "../../../internal/utils";
export declare class WorkflowRunUsageBillableMACOSJobRuns extends SpeakeasyBase {
    durationMs: number;
    jobId: number;
}
export declare class WorkflowRunUsageBillableMACOS extends SpeakeasyBase {
    jobRuns?: WorkflowRunUsageBillableMACOSJobRuns[];
    jobs: number;
    totalMs: number;
}
export declare class WorkflowRunUsageBillableUBUNTUJobRuns extends SpeakeasyBase {
    durationMs: number;
    jobId: number;
}
export declare class WorkflowRunUsageBillableUBUNTU extends SpeakeasyBase {
    jobRuns?: WorkflowRunUsageBillableUBUNTUJobRuns[];
    jobs: number;
    totalMs: number;
}
export declare class WorkflowRunUsageBillableWINDOWSJobRuns extends SpeakeasyBase {
    durationMs: number;
    jobId: number;
}
export declare class WorkflowRunUsageBillableWINDOWS extends SpeakeasyBase {
    jobRuns?: WorkflowRunUsageBillableWINDOWSJobRuns[];
    jobs: number;
    totalMs: number;
}
export declare class WorkflowRunUsageBillable extends SpeakeasyBase {
    macos?: WorkflowRunUsageBillableMACOS;
    ubuntu?: WorkflowRunUsageBillableUBUNTU;
    windows?: WorkflowRunUsageBillableWINDOWS;
}
/**
 * Workflow Run Usage
 */
export declare class WorkflowRunUsage extends SpeakeasyBase {
    billable: WorkflowRunUsageBillable;
    runDurationMs?: number;
}
