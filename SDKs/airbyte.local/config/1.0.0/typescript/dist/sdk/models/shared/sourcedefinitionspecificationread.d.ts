import { SpeakeasyBase } from "../../../internal/utils";
import { AdvancedAuth } from "./advancedauth";
import { SourceAuthSpecification } from "./sourceauthspecification";
import { SynchronousJobRead } from "./synchronousjobread";
/**
 * Successful operation
 */
export declare class SourceDefinitionSpecificationRead extends SpeakeasyBase {
    advancedAuth?: AdvancedAuth;
    authSpecification?: SourceAuthSpecification;
    /**
     * The specification for what values are required to configure the sourceDefinition.
     */
    connectionSpecification?: Record<string, any>;
    documentationUrl?: string;
    jobInfo: SynchronousJobRead;
    sourceDefinitionId: string;
}
