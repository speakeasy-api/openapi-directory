import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the configuration information that's required to connect to a database.
 */
export declare class ConnectionConfiguration extends SpeakeasyBase {
    databaseHost: string;
    databaseName: string;
    databasePort: number;
    secretArn: string;
    tableName: string;
}
