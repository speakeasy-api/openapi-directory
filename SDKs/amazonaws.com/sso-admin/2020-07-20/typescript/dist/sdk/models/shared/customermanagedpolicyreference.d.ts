import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each AWS account where you want to deploy your permission set.
 */
export declare class CustomerManagedPolicyReference extends SpeakeasyBase {
    name: string;
    path?: string;
}
