import { SpeakeasyBase } from "../../../internal/utils";
import { AdvancedAuth } from "./advancedauth";
import { DestinationAuthSpecification } from "./destinationauthspecification";
import { DestinationSyncModeEnum } from "./destinationsyncmodeenum";
import { SynchronousJobRead } from "./synchronousjobread";
/**
 * Successful operation
 */
export declare class DestinationDefinitionSpecificationRead extends SpeakeasyBase {
    advancedAuth?: AdvancedAuth;
    authSpecification?: DestinationAuthSpecification;
    /**
     * The specification for what values are required to configure the destinationDefinition.
     */
    connectionSpecification?: any;
    destinationDefinitionId: string;
    documentationUrl?: string;
    jobInfo: SynchronousJobRead;
    supportedDestinationSyncModes?: DestinationSyncModeEnum[];
}
