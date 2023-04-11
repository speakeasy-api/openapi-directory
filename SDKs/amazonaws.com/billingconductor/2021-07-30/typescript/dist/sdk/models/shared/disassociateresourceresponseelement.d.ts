import { SpeakeasyBase } from "../../../internal/utils";
import { AssociateResourceError } from "./associateresourceerror";
/**
 *  A resource disassociation result for a percentage custom line item.
 */
export declare class DisassociateResourceResponseElement extends SpeakeasyBase {
    arn?: string;
    error?: AssociateResourceError;
}
