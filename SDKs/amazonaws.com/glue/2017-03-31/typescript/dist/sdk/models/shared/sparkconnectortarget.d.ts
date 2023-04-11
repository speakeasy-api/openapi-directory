import { SpeakeasyBase } from "../../../internal/utils";
import { GlueSchema } from "./glueschema";
/**
 * Specifies a target that uses an Apache Spark connector.
 */
export declare class SparkConnectorTarget extends SpeakeasyBase {
    additionalOptions?: Record<string, string>;
    connectionName: string;
    connectionType: string;
    connectorName: string;
    inputs: string[];
    name: string;
    outputSchemas?: GlueSchema[];
}
