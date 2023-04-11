import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataProperties } from "./metadataproperties";
import { Parent } from "./parent";
import { Tag } from "./tag";
import { TrialComponentArtifact } from "./trialcomponentartifact";
import { TrialComponentMetricSummary } from "./trialcomponentmetricsummary";
import { TrialComponentParameterValue } from "./trialcomponentparametervalue";
import { TrialComponentSource } from "./trialcomponentsource";
import { TrialComponentSourceDetail } from "./trialcomponentsourcedetail";
import { TrialComponentStatus } from "./trialcomponentstatus";
import { UserContext } from "./usercontext";
/**
 * The properties of a trial component as returned by the <a>Search</a> API.
 */
export declare class TrialComponent extends SpeakeasyBase {
    createdBy?: UserContext;
    creationTime?: Date;
    displayName?: string;
    endTime?: Date;
    inputArtifacts?: Record<string, TrialComponentArtifact>;
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
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
    parents?: Parent[];
    runName?: string;
    source?: TrialComponentSource;
    sourceDetail?: TrialComponentSourceDetail;
    startTime?: Date;
    /**
     * The status of the trial component.
     */
    status?: TrialComponentStatus;
    tags?: Tag[];
    trialComponentArn?: string;
    trialComponentName?: string;
}
