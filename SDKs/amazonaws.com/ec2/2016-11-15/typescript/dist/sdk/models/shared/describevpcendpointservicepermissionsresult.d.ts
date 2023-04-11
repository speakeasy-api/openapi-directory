import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of principal.
 */
export declare enum DescribeVpcEndpointServicePermissionsResultAllowedPrincipalsPrincipalTypeEnum {
    All = "All",
    Service = "Service",
    OrganizationUnit = "OrganizationUnit",
    Account = "Account",
    User = "User",
    Role = "Role"
}
/**
 * Describes a tag.
 */
export declare class DescribeVpcEndpointServicePermissionsResultAllowedPrincipalsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a principal.
 */
export declare class DescribeVpcEndpointServicePermissionsResultAllowedPrincipals extends SpeakeasyBase {
    principal?: string;
    principalType?: DescribeVpcEndpointServicePermissionsResultAllowedPrincipalsPrincipalTypeEnum;
    serviceId?: string;
    servicePermissionId?: string;
    tags?: DescribeVpcEndpointServicePermissionsResultAllowedPrincipalsTags[];
}
/**
 * Success
 */
export declare class DescribeVpcEndpointServicePermissionsResult extends SpeakeasyBase {
    allowedPrincipals?: DescribeVpcEndpointServicePermissionsResultAllowedPrincipals[];
    nextToken?: string;
}
