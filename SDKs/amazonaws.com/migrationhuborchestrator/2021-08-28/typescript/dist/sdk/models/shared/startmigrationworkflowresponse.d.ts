import { SpeakeasyBase } from "../../../internal/utils";
import { MigrationWorkflowStatusEnumEnum } from "./migrationworkflowstatusenumenum";
/**
 * Success
 */
export declare class StartMigrationWorkflowResponse extends SpeakeasyBase {
    arn?: string;
    id?: string;
    lastStartTime?: Date;
    status?: MigrationWorkflowStatusEnumEnum;
    statusMessage?: string;
}
