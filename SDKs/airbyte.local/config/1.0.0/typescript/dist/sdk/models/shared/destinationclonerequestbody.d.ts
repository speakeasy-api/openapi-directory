import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationCloneConfiguration } from "./destinationcloneconfiguration";
/**
 * The values required to configure the destination. The schema for this should have an id of the existing destination along with the configuration you want to change in case.
 */
export declare class DestinationCloneRequestBody extends SpeakeasyBase {
    destinationCloneId: string;
    destinationConfiguration?: DestinationCloneConfiguration;
}
