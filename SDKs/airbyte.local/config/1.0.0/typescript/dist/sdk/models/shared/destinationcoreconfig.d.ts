import { SpeakeasyBase } from "../../../internal/utils";
export declare class DestinationCoreConfig extends SpeakeasyBase {
    /**
     * The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.
     */
    connectionConfiguration: any;
    destinationDefinitionId: string;
    destinationId?: string;
    workspaceId: string;
}
