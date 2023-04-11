import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataProperties } from "./metadataproperties";
import { Tag } from "./tag";
import { TrialComponentSimpleSummary } from "./trialcomponentsimplesummary";
import { TrialSource } from "./trialsource";
import { UserContext } from "./usercontext";
/**
 * The properties of a trial as returned by the <a>Search</a> API.
 */
export declare class Trial extends SpeakeasyBase {
    createdBy?: UserContext;
    creationTime?: Date;
    displayName?: string;
    experimentName?: string;
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    /**
     * Metadata properties of the tracking entity, trial, or trial component.
     */
    metadataProperties?: MetadataProperties;
    /**
     * The source of the trial.
     */
    source?: TrialSource;
    tags?: Tag[];
    trialArn?: string;
    trialComponentSummaries?: TrialComponentSimpleSummary[];
    trialName?: string;
}
