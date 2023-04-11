import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An operation that applies to the requested group. This operation might add, replace, or remove an attribute.
 */
export declare class AttributeOperation extends SpeakeasyBase {
    attributePath: string;
    attributeValue?: Record<string, any>;
}
