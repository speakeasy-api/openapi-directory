import { SpeakeasyBase } from "../../../internal/utils";
import { AssociateResourceErrorReasonEnum } from "./associateresourceerrorreasonenum";
/**
 *  A representation of a resource association error.
 */
export declare class AssociateResourceError extends SpeakeasyBase {
    message?: string;
    reason?: AssociateResourceErrorReasonEnum;
}
