import { SpeakeasyBase } from "../../../internal/utils";
import { AssociateResourceResponseElement } from "./associateresourceresponseelement";
/**
 * Success
 */
export declare class BatchAssociateResourcesToCustomLineItemOutput extends SpeakeasyBase {
    failedAssociatedResources?: AssociateResourceResponseElement[];
    successfullyAssociatedResources?: AssociateResourceResponseElement[];
}
