import { SpeakeasyBase } from "../../../internal/utils";
import { ActorDefinitionResourceRequirements } from "./actordefinitionresourcerequirements";
/**
 * Update the SourceDefinition. Currently, the only allowed attribute to update is the default docker image version.
 */
export declare class SourceDefinitionUpdate extends SpeakeasyBase {
    dockerImageTag: string;
    /**
     * actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level.
     */
    resourceRequirements?: ActorDefinitionResourceRequirements;
    sourceDefinitionId: string;
}
