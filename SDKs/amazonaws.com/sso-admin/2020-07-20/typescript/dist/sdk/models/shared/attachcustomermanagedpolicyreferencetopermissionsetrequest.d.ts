import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerManagedPolicyReference } from "./customermanagedpolicyreference";
export declare class AttachCustomerManagedPolicyReferenceToPermissionSetRequest extends SpeakeasyBase {
    customerManagedPolicyReference: CustomerManagedPolicyReference;
    instanceArn: string;
    permissionSetArn: string;
}
