import { SpeakeasyBase } from "../../../internal/utils";
import { MigrationWorkflowStatusEnumEnum } from "./migrationworkflowstatusenumenum";
/**
 * Success
 */
export declare class DeleteMigrationWorkflowResponse extends SpeakeasyBase {
    arn?: string;
    id?: string;
    status?: MigrationWorkflowStatusEnumEnum;
}
