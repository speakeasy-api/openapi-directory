import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A set of key-value pairs that are used to manage the resource. Tags can only be applied to permission sets and cannot be applied to corresponding roles that IAM Identity Center creates in AWS accounts.
 */
export declare class Tag extends SpeakeasyBase {
    key: string;
    value: string;
}
