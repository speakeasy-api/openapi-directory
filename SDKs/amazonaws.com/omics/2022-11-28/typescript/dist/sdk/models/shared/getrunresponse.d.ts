import { SpeakeasyBase } from "../../../internal/utils";
import { RunLogLevelEnum } from "./runloglevelenum";
import { RunStatusEnum } from "./runstatusenum";
import { WorkflowTypeEnum } from "./workflowtypeenum";
/**
 * Success
 */
export declare class GetRunResponse extends SpeakeasyBase {
    arn?: string;
    creationTime?: Date;
    definition?: string;
    digest?: string;
    id?: string;
    logLevel?: RunLogLevelEnum;
    name?: string;
    outputUri?: string;
    parameters?: Record<string, any>;
    priority?: number;
    resourceDigests?: Record<string, string>;
    roleArn?: string;
    runGroupId?: string;
    runId?: string;
    startTime?: Date;
    startedBy?: string;
    status?: RunStatusEnum;
    statusMessage?: string;
    stopTime?: Date;
    storageCapacity?: number;
    tags?: Record<string, string>;
    workflowId?: string;
    workflowType?: WorkflowTypeEnum;
}
