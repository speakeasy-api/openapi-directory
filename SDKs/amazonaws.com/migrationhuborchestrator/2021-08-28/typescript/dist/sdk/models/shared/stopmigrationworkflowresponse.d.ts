import { SpeakeasyBase } from "../../../internal/utils";
import { MigrationWorkflowStatusEnumEnum } from "./migrationworkflowstatusenumenum";
/**
 * Success
 */
export declare class StopMigrationWorkflowResponse extends SpeakeasyBase {
    arn?: string;
    id?: string;
    lastStopTime?: Date;
    status?: MigrationWorkflowStatusEnumEnum;
    statusMessage?: string;
}
