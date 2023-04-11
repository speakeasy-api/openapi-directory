import { SpeakeasyBase } from "../../../internal/utils";
import { ListResourcesAssociatedToCustomLineItemResponseElement } from "./listresourcesassociatedtocustomlineitemresponseelement";
/**
 * Success
 */
export declare class ListResourcesAssociatedToCustomLineItemOutput extends SpeakeasyBase {
    arn?: string;
    associatedResources?: ListResourcesAssociatedToCustomLineItemResponseElement[];
    nextToken?: string;
}
