import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContainersQuotaInfoOrgQuota extends SpeakeasyBase {
    /**
     * The number of public IP addresses that can be assigned across all spaces of the organization.
     */
    floatingIpsMax?: string;
    /**
     * The number of public IP addresses that are required for one space. If the number of public IP addresses is not available, then a new space cannot be created to be used with IBM Containers.
     */
    floatingIpsSpaceDefault?: string;
    /**
     * The number of public IP addresses that are currently assigned to the spaces of the organization.
     */
    floatingIpsUsage?: number;
    /**
     * The maximum amount of container memory on the compute host that can be assigned across the spaces of the organization.
     */
    ramMax?: number;
    /**
     * The amount of container memory that is required to be used for one space. If this amount is not available, then a new space cannot be created to be used with IBM Containers.
     */
    ramSpaceDefault?: number;
    /**
     * The amount of container memory that is currently used across all spaces of the organization.
     */
    ramUsage?: number;
    /**
     * The number of subnets that were created across all spaces of the organization.
     */
    subnetUsage?: number;
    /**
     * The number of subnets that is required to create a new space. If this number is not available, then a new space cannot be created to be used with IBM Containers.
     */
    subnetsDefault?: number;
    /**
     * The maximum number of container private subnet that can be created across all spaces of the organization.
     */
    subnetsMax?: number;
}
export declare class ContainersQuotaInfoSpaceQuota extends SpeakeasyBase {
    /**
     * The maximum number of public IP addresses that can be allocated to a space.
     */
    floatingIpsMax?: string;
    /**
     * The maximum amount of container memory that can be shared across all containers that are created in a space.
     */
    ramMax?: number;
    /**
     * The maximum number of private subnets that can be created in one space.
     */
    subnetsMax?: number;
}
/**
 * OK. The current quota that is assigned to the organization and space is returned.
 */
export declare class ContainersQuotaInfo extends SpeakeasyBase {
    /**
     * The Bluemix account type indicating the quota limits and how the organization is billed.
     */
    accountType?: string;
    /**
     * The country in which the account was opened.
     */
    countryCode?: string;
    orgQuota?: ContainersQuotaInfoOrgQuota;
    spaceQuota?: ContainersQuotaInfoSpaceQuota;
}
