import { SpeakeasyBase } from "../../../internal/utils";
import { DisassociateResourceResponseElement } from "./disassociateresourceresponseelement";
/**
 * Success
 */
export declare class BatchDisassociateResourcesFromCustomLineItemOutput extends SpeakeasyBase {
    failedDisassociatedResources?: DisassociateResourceResponseElement[];
    successfullyDisassociatedResources?: DisassociateResourceResponseElement[];
}
