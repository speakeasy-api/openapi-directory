import { SpeakeasyBase } from "../../../internal/utils";
export declare class WorkflowUsageBillableMACOS extends SpeakeasyBase {
    totalMs?: number;
}
export declare class WorkflowUsageBillableUBUNTU extends SpeakeasyBase {
    totalMs?: number;
}
export declare class WorkflowUsageBillableWINDOWS extends SpeakeasyBase {
    totalMs?: number;
}
export declare class WorkflowUsageBillable extends SpeakeasyBase {
    macos?: WorkflowUsageBillableMACOS;
    ubuntu?: WorkflowUsageBillableUBUNTU;
    windows?: WorkflowUsageBillableWINDOWS;
}
/**
 * Workflow Usage
 */
export declare class WorkflowUsage extends SpeakeasyBase {
    billable: WorkflowUsageBillable;
}
