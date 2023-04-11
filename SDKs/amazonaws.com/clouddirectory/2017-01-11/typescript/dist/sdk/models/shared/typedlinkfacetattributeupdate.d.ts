import { SpeakeasyBase } from "../../../internal/utils";
import { TypedLinkAttributeDefinition } from "./typedlinkattributedefinition";
import { UpdateActionTypeEnum } from "./updateactiontypeenum";
/**
 * A typed link facet attribute update.
 */
export declare class TypedLinkFacetAttributeUpdate extends SpeakeasyBase {
    action: UpdateActionTypeEnum;
    attribute: TypedLinkAttributeDefinition;
}
