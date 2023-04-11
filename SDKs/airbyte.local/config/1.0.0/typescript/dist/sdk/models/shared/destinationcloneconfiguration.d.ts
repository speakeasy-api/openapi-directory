import { SpeakeasyBase } from "../../../internal/utils";
export declare class DestinationCloneConfiguration extends SpeakeasyBase {
    /**
     * The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.
     */
    connectionConfiguration?: any;
    name?: string;
}
