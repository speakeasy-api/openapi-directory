import { SpeakeasyBase } from "../../../internal/utils";
import { ActorDefinitionResourceRequirements } from "./actordefinitionresourcerequirements";
export declare class DestinationDefinitionCreate extends SpeakeasyBase {
    dockerImageTag: string;
    dockerRepository: string;
    documentationUrl: string;
    icon?: string;
    name: string;
    /**
     * actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level.
     */
    resourceRequirements?: ActorDefinitionResourceRequirements;
}
