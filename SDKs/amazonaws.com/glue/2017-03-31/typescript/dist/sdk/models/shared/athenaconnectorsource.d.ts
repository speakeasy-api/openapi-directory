import { SpeakeasyBase } from "../../../internal/utils";
import { GlueSchema } from "./glueschema";
/**
 * Specifies a connector to an Amazon Athena data source.
 */
export declare class AthenaConnectorSource extends SpeakeasyBase {
    connectionName: string;
    connectionTable?: string;
    connectionType: string;
    connectorName: string;
    name: string;
    outputSchemas?: GlueSchema[];
    schemaName: string;
}
