import { SpeakeasyBase } from "../../../internal/utils";
import { ModelPackageGroupStatusEnum } from "./modelpackagegroupstatusenum";
import { Tag } from "./tag";
import { UserContext } from "./usercontext";
/**
 * A group of versioned models in the model registry.
 */
export declare class ModelPackageGroup extends SpeakeasyBase {
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    createdBy?: UserContext;
    creationTime?: Date;
    modelPackageGroupArn?: string;
    modelPackageGroupDescription?: string;
    modelPackageGroupName?: string;
    modelPackageGroupStatus?: ModelPackageGroupStatusEnum;
    tags?: Tag[];
}
