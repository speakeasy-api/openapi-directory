import { SpeakeasyBase } from "../../../internal/utils";
import { TrialComponentSource } from "./trialcomponentsource";
import { UserContext } from "./usercontext";
/**
 * A short summary of a trial component.
 */
export declare class TrialComponentSimpleSummary extends SpeakeasyBase {
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    createdBy?: UserContext;
    creationTime?: Date;
    trialComponentArn?: string;
    trialComponentName?: string;
    /**
     * The Amazon Resource Name (ARN) and job type of the source of a trial component.
     */
    trialComponentSource?: TrialComponentSource;
}
