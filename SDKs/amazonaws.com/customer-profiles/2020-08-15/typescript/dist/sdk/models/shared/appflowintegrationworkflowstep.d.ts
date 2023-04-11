import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";
/**
 * Workflow step details for <code>APPFLOW_INTEGRATION</code> workflow.
 */
export declare class AppflowIntegrationWorkflowStep extends SpeakeasyBase {
    batchRecordsEndTime: string;
    batchRecordsStartTime: string;
    createdAt: Date;
    executionMessage: string;
    flowName: string;
    lastUpdatedAt: Date;
    recordsProcessed: number;
    status: StatusEnum;
}
