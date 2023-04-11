import { SpeakeasyBase } from "../../../internal/utils";
export declare class SourceCoreConfig extends SpeakeasyBase {
    /**
     * The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.
     */
    connectionConfiguration: any;
    sourceDefinitionId: string;
    sourceId?: string;
    workspaceId: string;
}
