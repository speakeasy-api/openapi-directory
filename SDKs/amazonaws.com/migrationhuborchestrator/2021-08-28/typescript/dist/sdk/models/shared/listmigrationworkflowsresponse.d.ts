import { SpeakeasyBase } from "../../../internal/utils";
import { MigrationWorkflowSummary } from "./migrationworkflowsummary";
/**
 * Success
 */
export declare class ListMigrationWorkflowsResponse extends SpeakeasyBase {
    migrationWorkflowSummary: MigrationWorkflowSummary[];
    nextToken?: string;
}
