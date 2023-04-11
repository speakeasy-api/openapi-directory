import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataProperties } from "./metadataproperties";
import { Tag } from "./tag";
import { TrialComponentArtifact } from "./trialcomponentartifact";
import { TrialComponentParameterValue } from "./trialcomponentparametervalue";
import { TrialComponentStatus } from "./trialcomponentstatus";
export declare class CreateTrialComponentRequest extends SpeakeasyBase {
    displayName?: string;
    endTime?: Date;
    inputArtifacts?: Record<string, TrialComponentArtifact>;
    /**
     * Metadata properties of the tracking entity, trial, or trial component.
     */
    metadataProperties?: MetadataProperties;
    outputArtifacts?: Record<string, TrialComponentArtifact>;
    parameters?: Record<string, TrialComponentParameterValue>;
    startTime?: Date;
    status?: TrialComponentStatus;
    tags?: Tag[];
    trialComponentName: string;
}
