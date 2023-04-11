import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies an Glue Data Catalog target.
 */
export declare class CatalogTarget extends SpeakeasyBase {
    connectionName?: string;
    databaseName: string;
    dlqEventQueueArn?: string;
    eventQueueArn?: string;
    tables: string[];
}
