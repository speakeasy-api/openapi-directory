import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValueList } from "./attributevaluelist";
/**
 * A name value pair that describes an aspect of an account.
**/
export declare class AttributeList extends SpeakeasyBase {
    attributeName?: string;
    attributeValues?: AttributeValueList[];
}
