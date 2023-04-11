import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationStatusEnum } from "./associationstatusenum";
/**
 * An array of requested updates to the enablement status of controls in specified standards. The objects in the array include a security control ID, the Amazon Resource Name (ARN) of the standard, the requested enablement status, and the reason for updating the enablement status.
 */
export declare class StandardsControlAssociationUpdate extends SpeakeasyBase {
    associationStatus: AssociationStatusEnum;
    securityControlId: string;
    standardsArn: string;
    updatedReason?: string;
}
