import { SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
import { EntityTypeEnum } from "./entitytypeenum";
/**
 *  An attribute that was extracted, but Comprehend Medical; was unable to relate to an entity.
 */
export declare class UnmappedAttribute extends SpeakeasyBase {
    attribute?: Attribute;
    type?: EntityTypeEnum;
}
