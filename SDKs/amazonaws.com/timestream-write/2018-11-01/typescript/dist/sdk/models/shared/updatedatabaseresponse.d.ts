import { SpeakeasyBase } from "../../../internal/utils";
import { Database } from "./database";
/**
 * Success
 */
export declare class UpdateDatabaseResponse extends SpeakeasyBase {
    /**
     * A top-level container for a table. Databases and tables are the fundamental management concepts in Amazon Timestream. All tables in a database are encrypted with the same KMS key.
     */
    database?: Database;
}
