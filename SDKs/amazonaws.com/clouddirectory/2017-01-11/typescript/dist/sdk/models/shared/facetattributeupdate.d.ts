import { SpeakeasyBase } from "../../../internal/utils";
import { FacetAttribute } from "./facetattribute";
import { UpdateActionTypeEnum } from "./updateactiontypeenum";
/**
 * A structure that contains information used to update an attribute.
 */
export declare class FacetAttributeUpdate extends SpeakeasyBase {
    action?: UpdateActionTypeEnum;
    attribute?: FacetAttribute;
}
