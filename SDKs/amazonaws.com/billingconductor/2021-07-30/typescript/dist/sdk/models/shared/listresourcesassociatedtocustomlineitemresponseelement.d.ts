import { SpeakeasyBase } from "../../../internal/utils";
import { CustomLineItemRelationshipEnum } from "./customlineitemrelationshipenum";
/**
 *  A representation of a resource association for a custom line item.
 */
export declare class ListResourcesAssociatedToCustomLineItemResponseElement extends SpeakeasyBase {
    arn?: string;
    endBillingPeriod?: string;
    relationship?: CustomLineItemRelationshipEnum;
}
