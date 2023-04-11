import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationStatusEnum } from "./associationstatusenum";
/**
 *  Provides details about a control's enablement status in a specified standard.
 */
export declare class StandardsControlAssociationDetail extends SpeakeasyBase {
    associationStatus: AssociationStatusEnum;
    relatedRequirements?: string[];
    securityControlArn: string;
    securityControlId: string;
    standardsArn: string;
    standardsControlArns?: string[];
    standardsControlDescription?: string;
    standardsControlTitle?: string;
    updatedAt?: Date;
    updatedReason?: string;
}
