import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of principal.
 */
export declare enum ModifyVpcEndpointServicePermissionsResultAddedPrincipalsPrincipalTypeEnum {
    All = "All",
    Service = "Service",
    OrganizationUnit = "OrganizationUnit",
    Account = "Account",
    User = "User",
    Role = "Role"
}
/**
 * Describes a principal.
 */
export declare class ModifyVpcEndpointServicePermissionsResultAddedPrincipals extends SpeakeasyBase {
    principal?: string;
    principalType?: ModifyVpcEndpointServicePermissionsResultAddedPrincipalsPrincipalTypeEnum;
    serviceId?: string;
    servicePermissionId?: string;
}
/**
 * Success
 */
export declare class ModifyVpcEndpointServicePermissionsResult extends SpeakeasyBase {
    addedPrincipals?: ModifyVpcEndpointServicePermissionsResultAddedPrincipals[];
    returnValue?: boolean;
}
