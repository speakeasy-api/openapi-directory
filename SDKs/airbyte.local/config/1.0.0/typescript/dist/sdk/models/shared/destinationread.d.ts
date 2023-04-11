import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful operation
 */
export declare class DestinationRead extends SpeakeasyBase {
    /**
     * The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.
     */
    connectionConfiguration: any;
    destinationDefinitionId: string;
    destinationId: string;
    destinationName: string;
    icon?: string;
    name: string;
    workspaceId: string;
}
