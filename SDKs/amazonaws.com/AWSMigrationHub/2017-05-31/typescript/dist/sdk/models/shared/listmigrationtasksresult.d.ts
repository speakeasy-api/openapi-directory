import { SpeakeasyBase } from "../../../internal/utils";
import { MigrationTaskSummary } from "./migrationtasksummary";
/**
 * Success
 */
export declare class ListMigrationTasksResult extends SpeakeasyBase {
    migrationTaskSummaryList?: MigrationTaskSummary[];
    nextToken?: string;
}
