import { SpeakeasyBase } from "../../../internal/utils";
import { GlueSchema } from "./glueschema";
/**
 * Specifies a data target that writes to Amazon S3 in Apache Parquet columnar storage.
 */
export declare class JDBCConnectorTarget extends SpeakeasyBase {
    additionalOptions?: Record<string, string>;
    connectionName: string;
    connectionTable: string;
    connectionType: string;
    connectorName: string;
    inputs: string[];
    name: string;
    outputSchemas?: GlueSchema[];
}
