import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a value of an account attribute.
 */
export declare class DescribeAccountAttributesResultAccountAttributesAttributeValues extends SpeakeasyBase {
    attributeValue?: string;
}
/**
 * Describes an account attribute.
 */
export declare class DescribeAccountAttributesResultAccountAttributes extends SpeakeasyBase {
    attributeName?: string;
    attributeValues?: DescribeAccountAttributesResultAccountAttributesAttributeValues[];
}
/**
 * Success
 */
export declare class DescribeAccountAttributesResult extends SpeakeasyBase {
    accountAttributes?: DescribeAccountAttributesResultAccountAttributes[];
}
