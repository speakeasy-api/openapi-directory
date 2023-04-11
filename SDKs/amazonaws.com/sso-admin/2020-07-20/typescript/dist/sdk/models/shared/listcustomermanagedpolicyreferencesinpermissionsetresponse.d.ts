import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerManagedPolicyReference } from "./customermanagedpolicyreference";
/**
 * Success
 */
export declare class ListCustomerManagedPolicyReferencesInPermissionSetResponse extends SpeakeasyBase {
    customerManagedPolicyReferences?: CustomerManagedPolicyReference[];
    nextToken?: string;
}
