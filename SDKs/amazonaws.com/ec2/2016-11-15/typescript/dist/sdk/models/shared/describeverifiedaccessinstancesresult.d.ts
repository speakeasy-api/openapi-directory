import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DescribeVerifiedAccessInstancesResultVerifiedAccessInstancesTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of device-based trust provider.
 */
export declare enum DescribeVerifiedAccessInstancesResultVerifiedAccessInstancesVerifiedAccessTrustProvidersDeviceTrustProviderTypeEnum {
    Jamf = "jamf",
    Crowdstrike = "crowdstrike"
}
/**
 * The type of trust provider (user- or device-based).
 */
export declare enum DescribeVerifiedAccessInstancesResultVerifiedAccessInstancesVerifiedAccessTrustProvidersTrustProviderTypeEnum {
    User = "user",
    Device = "device"
}
/**
 * The type of user-based trust provider.
 */
export declare enum DescribeVerifiedAccessInstancesResultVerifiedAccessInstancesVerifiedAccessTrustProvidersUserTrustProviderTypeEnum {
    IamIdentityCenter = "iam-identity-center",
    Oidc = "oidc"
}
/**
 * Condensed information about a trust provider.
 */
export declare class DescribeVerifiedAccessInstancesResultVerifiedAccessInstancesVerifiedAccessTrustProviders extends SpeakeasyBase {
    description?: string;
    deviceTrustProviderType?: DescribeVerifiedAccessInstancesResultVerifiedAccessInstancesVerifiedAccessTrustProvidersDeviceTrustProviderTypeEnum;
    trustProviderType?: DescribeVerifiedAccessInstancesResultVerifiedAccessInstancesVerifiedAccessTrustProvidersTrustProviderTypeEnum;
    userTrustProviderType?: DescribeVerifiedAccessInstancesResultVerifiedAccessInstancesVerifiedAccessTrustProvidersUserTrustProviderTypeEnum;
    verifiedAccessTrustProviderId?: string;
}
/**
 * Describes a Verified Access instance.
 */
export declare class DescribeVerifiedAccessInstancesResultVerifiedAccessInstances extends SpeakeasyBase {
    creationTime?: string;
    description?: string;
    lastUpdatedTime?: string;
    tags?: DescribeVerifiedAccessInstancesResultVerifiedAccessInstancesTags[];
    verifiedAccessInstanceId?: string;
    verifiedAccessTrustProviders?: DescribeVerifiedAccessInstancesResultVerifiedAccessInstancesVerifiedAccessTrustProviders[];
}
/**
 * Success
 */
export declare class DescribeVerifiedAccessInstancesResult extends SpeakeasyBase {
    nextToken?: string;
    verifiedAccessInstances?: DescribeVerifiedAccessInstancesResultVerifiedAccessInstances[];
}
