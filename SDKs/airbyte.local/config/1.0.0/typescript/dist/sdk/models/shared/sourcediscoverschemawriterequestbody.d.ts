import { SpeakeasyBase } from "../../../internal/utils";
import { AirbyteCatalog } from "./airbytecatalog";
/**
 * to write this requested object to database.
 */
export declare class SourceDiscoverSchemaWriteRequestBody extends SpeakeasyBase {
    /**
     * describes the available schema (catalog).
     */
    catalog: AirbyteCatalog;
    configurationHash?: string;
    connectorVersion?: string;
    sourceId?: string;
}
