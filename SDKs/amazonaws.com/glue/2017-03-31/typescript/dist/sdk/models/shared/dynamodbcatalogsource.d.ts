import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a DynamoDB data source in the Glue Data Catalog.
 */
export declare class DynamoDBCatalogSource extends SpeakeasyBase {
    database: string;
    name: string;
    table: string;
}
