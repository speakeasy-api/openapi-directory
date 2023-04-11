import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The properties that are applied when the custom connector is being used as a source.
 */
export declare class CustomConnectorSourceProperties extends SpeakeasyBase {
    customProperties?: Record<string, string>;
    entityName: string;
}
