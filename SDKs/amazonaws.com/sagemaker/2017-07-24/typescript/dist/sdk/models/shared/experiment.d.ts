import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentSource } from "./experimentsource";
import { Tag } from "./tag";
import { UserContext } from "./usercontext";
/**
 * The properties of an experiment as returned by the <a>Search</a> API.
 */
export declare class Experiment extends SpeakeasyBase {
    createdBy?: UserContext;
    creationTime?: Date;
    description?: string;
    displayName?: string;
    experimentArn?: string;
    experimentName?: string;
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    /**
     * The source of the experiment.
     */
    source?: ExperimentSource;
    tags?: Tag[];
}
