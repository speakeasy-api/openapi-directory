import { SpeakeasyBase } from "../../../internal/utils";
import { AssociateResourceError } from "./associateresourceerror";
/**
 *  A resource association result for a percentage custom line item.
 */
export declare class AssociateResourceResponseElement extends SpeakeasyBase {
    arn?: string;
    error?: AssociateResourceError;
}
