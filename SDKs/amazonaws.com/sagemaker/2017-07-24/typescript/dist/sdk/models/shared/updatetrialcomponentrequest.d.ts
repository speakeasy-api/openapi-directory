import { SpeakeasyBase } from "../../../internal/utils";
import { TrialComponentArtifact } from "./trialcomponentartifact";
import { TrialComponentParameterValue } from "./trialcomponentparametervalue";
import { TrialComponentStatus } from "./trialcomponentstatus";
export declare class UpdateTrialComponentRequest extends SpeakeasyBase {
    displayName?: string;
    endTime?: Date;
    inputArtifacts?: Record<string, TrialComponentArtifact>;
    inputArtifactsToRemove?: string[];
    outputArtifacts?: Record<string, TrialComponentArtifact>;
    outputArtifactsToRemove?: string[];
    parameters?: Record<string, TrialComponentParameterValue>;
    parametersToRemove?: string[];
    startTime?: Date;
    status?: TrialComponentStatus;
    trialComponentName: string;
}
