import { SpeakeasyBase } from "../../../internal/utils";
import { ActorDefinitionResourceRequirements } from "./actordefinitionresourcerequirements";
export declare class DestinationDefinitionUpdate extends SpeakeasyBase {
    destinationDefinitionId: string;
    dockerImageTag?: string;
    /**
     * actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level.
     */
    resourceRequirements?: ActorDefinitionResourceRequirements;
}
