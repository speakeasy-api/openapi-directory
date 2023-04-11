import { SpeakeasyBase } from "../../../internal/utils";
import { MigrationWorkflowStatusEnumEnum } from "./migrationworkflowstatusenumenum";
import { StepInput } from "./stepinput";
import { Tool } from "./tool";
/**
 * Success
 */
export declare class GetMigrationWorkflowResponse extends SpeakeasyBase {
    adsApplicationConfigurationId?: string;
    adsApplicationName?: string;
    arn?: string;
    completedSteps?: number;
    creationTime?: Date;
    description?: string;
    endTime?: Date;
    id?: string;
    lastModifiedTime?: Date;
    lastStartTime?: Date;
    lastStopTime?: Date;
    name?: string;
    status?: MigrationWorkflowStatusEnumEnum;
    statusMessage?: string;
    tags?: Record<string, string>;
    templateId?: string;
    tools?: Tool[];
    totalSteps?: number;
    workflowBucket?: string;
    workflowInputs?: Record<string, StepInput>;
}
