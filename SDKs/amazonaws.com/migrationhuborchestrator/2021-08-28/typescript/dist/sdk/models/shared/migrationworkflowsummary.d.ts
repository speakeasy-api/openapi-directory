import { SpeakeasyBase } from "../../../internal/utils";
import { MigrationWorkflowStatusEnumEnum } from "./migrationworkflowstatusenumenum";
/**
 * The summary of a migration workflow.
 */
export declare class MigrationWorkflowSummary extends SpeakeasyBase {
    adsApplicationConfigurationName?: string;
    completedSteps?: number;
    creationTime?: Date;
    endTime?: Date;
    id?: string;
    name?: string;
    status?: MigrationWorkflowStatusEnumEnum;
    statusMessage?: string;
    templateId?: string;
    totalSteps?: number;
}
