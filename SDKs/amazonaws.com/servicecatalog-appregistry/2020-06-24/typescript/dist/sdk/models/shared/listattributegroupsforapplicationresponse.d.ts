import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeGroupDetails } from "./attributegroupdetails";
/**
 * Success
 */
export declare class ListAttributeGroupsForApplicationResponse extends SpeakeasyBase {
    attributeGroupsDetails?: AttributeGroupDetails[];
    nextToken?: string;
}
