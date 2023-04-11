import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Context information that enables CloudFormation to uniquely identify a resource. CloudFormation uses context key-value pairs in cases where a resource's logical and physical IDs aren't enough to uniquely identify that resource. Each context key-value pair specifies a resource that contains the targeted resource.
 */
export declare class PhysicalResourceIdContextKeyValuePair extends SpeakeasyBase {
    key: string;
    value: string;
}
