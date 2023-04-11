import { SpeakeasyBase } from "../../../internal/utils";
import { MigrationWorkflowStatusEnumEnum } from "./migrationworkflowstatusenumenum";
import { StepInput } from "./stepinput";
/**
 * Success
 */
export declare class UpdateMigrationWorkflowResponse extends SpeakeasyBase {
    adsApplicationConfigurationId?: string;
    arn?: string;
    creationTime?: Date;
    description?: string;
    id?: string;
    lastModifiedTime?: Date;
    name?: string;
    status?: MigrationWorkflowStatusEnumEnum;
    stepTargets?: string[];
    tags?: Record<string, string>;
    templateId?: string;
    workflowInputs?: Record<string, StepInput>;
}
