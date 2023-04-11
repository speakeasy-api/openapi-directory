import { SpeakeasyBase } from "../../../internal/utils";
import { GlueSchema } from "./glueschema";
import { JDBCConnectorOptions } from "./jdbcconnectoroptions";
/**
 * Specifies a connector to a JDBC data source.
 */
export declare class JDBCConnectorSource extends SpeakeasyBase {
    additionalOptions?: JDBCConnectorOptions;
    connectionName: string;
    connectionTable?: string;
    connectionType: string;
    connectorName: string;
    name: string;
    outputSchemas?: GlueSchema[];
    query?: string;
}
