import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeKey } from "./attributekey";
import { ObjectAttributeAction } from "./objectattributeaction";
/**
 * Structure that contains attribute update information.
 */
export declare class ObjectAttributeUpdate extends SpeakeasyBase {
    objectAttributeAction?: ObjectAttributeAction;
    objectAttributeKey?: AttributeKey;
}
