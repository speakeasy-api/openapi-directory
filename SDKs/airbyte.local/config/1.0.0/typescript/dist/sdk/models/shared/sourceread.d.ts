import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful operation
 */
export declare class SourceRead extends SpeakeasyBase {
    /**
     * The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.
     */
    connectionConfiguration: any;
    icon?: string;
    name: string;
    sourceDefinitionId: string;
    sourceId: string;
    sourceName: string;
    workspaceId: string;
}
