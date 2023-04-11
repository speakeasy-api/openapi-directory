import { SpeakeasyBase } from "../../../internal/utils";
import { ModelCardSecurityConfig } from "./modelcardsecurityconfig";
import { ModelCardStatusEnum } from "./modelcardstatusenum";
import { Tag } from "./tag";
import { UserContext } from "./usercontext";
/**
 * The model card for a model displayed in the Amazon SageMaker Model Dashboard.
 */
export declare class ModelDashboardModelCard extends SpeakeasyBase {
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    createdBy?: UserContext;
    creationTime?: Date;
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    modelCardArn?: string;
    modelCardName?: string;
    modelCardStatus?: ModelCardStatusEnum;
    modelCardVersion?: number;
    modelId?: string;
    riskRating?: string;
    securityConfig?: ModelCardSecurityConfig;
    tags?: Tag[];
}
