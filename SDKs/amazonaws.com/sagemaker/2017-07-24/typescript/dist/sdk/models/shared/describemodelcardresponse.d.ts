import { SpeakeasyBase } from "../../../internal/utils";
import { ModelCardProcessingStatusEnum } from "./modelcardprocessingstatusenum";
import { ModelCardSecurityConfig } from "./modelcardsecurityconfig";
import { ModelCardStatusEnum } from "./modelcardstatusenum";
import { UserContext } from "./usercontext";
/**
 * Success
 */
export declare class DescribeModelCardResponse extends SpeakeasyBase {
    content: string;
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    createdBy: UserContext;
    creationTime: Date;
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    modelCardArn: string;
    modelCardName: string;
    modelCardProcessingStatus?: ModelCardProcessingStatusEnum;
    modelCardStatus: ModelCardStatusEnum;
    modelCardVersion: number;
    securityConfig?: ModelCardSecurityConfig;
}
