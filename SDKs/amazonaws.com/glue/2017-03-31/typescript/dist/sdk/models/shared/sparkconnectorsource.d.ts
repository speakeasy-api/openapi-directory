import { SpeakeasyBase } from "../../../internal/utils";
import { GlueSchema } from "./glueschema";
/**
 * Specifies a connector to an Apache Spark data source.
 */
export declare class SparkConnectorSource extends SpeakeasyBase {
    additionalOptions?: Record<string, string>;
    connectionName: string;
    connectionType: string;
    connectorName: string;
    name: string;
    outputSchemas?: GlueSchema[];
}
