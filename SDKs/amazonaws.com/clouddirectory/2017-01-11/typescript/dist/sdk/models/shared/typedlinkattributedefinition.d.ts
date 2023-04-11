import { SpeakeasyBase } from "../../../internal/utils";
import { FacetAttributeTypeEnum } from "./facetattributetypeenum";
import { RequiredAttributeBehaviorEnum } from "./requiredattributebehaviorenum";
import { Rule } from "./rule";
import { TypedAttributeValue } from "./typedattributevalue";
/**
 * A typed link attribute definition.
 */
export declare class TypedLinkAttributeDefinition extends SpeakeasyBase {
    defaultValue?: TypedAttributeValue;
    isImmutable?: boolean;
    name: string;
    requiredBehavior: RequiredAttributeBehaviorEnum;
    rules?: Record<string, Rule>;
    type: FacetAttributeTypeEnum;
}
