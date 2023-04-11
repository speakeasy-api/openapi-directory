import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationStatusEnum } from "./associationstatusenum";
/**
 *  An array that provides the enablement status and other details for each control that applies to each enabled standard.
 */
export declare class StandardsControlAssociationSummary extends SpeakeasyBase {
    associationStatus: AssociationStatusEnum;
    relatedRequirements?: string[];
    securityControlArn: string;
    securityControlId: string;
    standardsArn: string;
    standardsControlDescription?: string;
    standardsControlTitle?: string;
    updatedAt?: Date;
    updatedReason?: string;
}
