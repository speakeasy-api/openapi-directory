import { SpeakeasyBase } from "../../../internal/utils";
import { FacetAttributeTypeEnum } from "./facetattributetypeenum";
import { Rule } from "./rule";
import { TypedAttributeValue } from "./typedattributevalue";
/**
 * A facet attribute definition. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_advanced.html#attributereferences">Attribute References</a> for more information.
 */
export declare class FacetAttributeDefinition extends SpeakeasyBase {
    defaultValue?: TypedAttributeValue;
    isImmutable?: boolean;
    rules?: Record<string, Rule>;
    type: FacetAttributeTypeEnum;
}
