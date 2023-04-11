import { SpeakeasyBase } from "../../../internal/utils";
import { AirbyteCatalog } from "./airbytecatalog";
import { CatalogDiff } from "./catalogdiff";
import { ConnectionStatusEnum } from "./connectionstatusenum";
import { SynchronousJobRead } from "./synchronousjobread";
/**
 * Returns the results of a discover catalog job. If the job was not successful, the catalog field will not be present. jobInfo will aways be present and its status be used to determine if the job was successful or not.
 */
export declare class SourceDiscoverSchemaRead extends SpeakeasyBase {
    breakingChange?: boolean;
    /**
     * describes the available schema (catalog).
     */
    catalog?: AirbyteCatalog;
    /**
     * Describes the difference between two Airbyte catalogs.
     */
    catalogDiff?: CatalogDiff;
    catalogId?: string;
    /**
     * Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.
     */
    connectionStatus?: ConnectionStatusEnum;
    jobInfo: SynchronousJobRead;
}
