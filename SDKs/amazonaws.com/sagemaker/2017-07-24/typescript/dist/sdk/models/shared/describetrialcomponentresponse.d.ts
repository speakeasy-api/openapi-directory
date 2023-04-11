import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataProperties } from "./metadataproperties";
import { TrialComponentArtifact } from "./trialcomponentartifact";
import { TrialComponentMetricSummary } from "./trialcomponentmetricsummary";
import { TrialComponentParameterValue } from "./trialcomponentparametervalue";
import { TrialComponentSource } from "./trialcomponentsource";
import { TrialComponentStatus } from "./trialcomponentstatus";
import { UserContext } from "./usercontext";
/**
 * Success
 */
export declare class DescribeTrialComponentResponse extends SpeakeasyBase {
    createdBy?: UserContext;
    creationTime?: Date;
    displayName?: string;
    endTime?: Date;
    inputArtifacts?: Record<string, TrialComponentArtifact>;
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    lineageGroupArn?: string;
    /**
     * Metadata properties of the tracking entity, trial, or trial component.
     */
    metadataProperties?: MetadataProperties;
    metrics?: TrialComponentMetricSummary[];
    outputArtifacts?: Record<string, TrialComponentArtifact>;
    parameters?: Record<string, TrialComponentParameterValue>;
    source?: TrialComponentSource;
    sources?: TrialComponentSource[];
    startTime?: Date;
    status?: TrialComponentStatus;
    trialComponentArn?: string;
    trialComponentName?: string;
}
