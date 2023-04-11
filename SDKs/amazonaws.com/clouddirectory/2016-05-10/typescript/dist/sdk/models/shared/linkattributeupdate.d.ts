import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeKey } from "./attributekey";
import { LinkAttributeAction } from "./linkattributeaction";
/**
 * Structure that contains attribute update information.
 */
export declare class LinkAttributeUpdate extends SpeakeasyBase {
    attributeAction?: LinkAttributeAction;
    attributeKey?: AttributeKey;
}
