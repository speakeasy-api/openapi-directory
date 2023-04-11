import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class CreateVerifiedAccessInstanceResultVerifiedAccessInstanceTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of device-based trust provider.
 */
export declare enum CreateVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProvidersDeviceTrustProviderTypeEnum {
    Jamf = "jamf",
    Crowdstrike = "crowdstrike"
}
/**
 * The type of trust provider (user- or device-based).
 */
export declare enum CreateVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProvidersTrustProviderTypeEnum {
    User = "user",
    Device = "device"
}
/**
 * The type of user-based trust provider.
 */
export declare enum CreateVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProvidersUserTrustProviderTypeEnum {
    IamIdentityCenter = "iam-identity-center",
    Oidc = "oidc"
}
/**
 * Condensed information about a trust provider.
 */
export declare class CreateVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProviders extends SpeakeasyBase {
    description?: string;
    deviceTrustProviderType?: CreateVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProvidersDeviceTrustProviderTypeEnum;
    trustProviderType?: CreateVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProvidersTrustProviderTypeEnum;
    userTrustProviderType?: CreateVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProvidersUserTrustProviderTypeEnum;
    verifiedAccessTrustProviderId?: string;
}
/**
 * The ID of the Amazon Web Services Verified Access instance.
 */
export declare class CreateVerifiedAccessInstanceResultVerifiedAccessInstance extends SpeakeasyBase {
    creationTime?: string;
    description?: string;
    lastUpdatedTime?: string;
    tags?: CreateVerifiedAccessInstanceResultVerifiedAccessInstanceTags[];
    verifiedAccessInstanceId?: string;
    verifiedAccessTrustProviders?: CreateVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProviders[];
}
/**
 * Success
 */
export declare class CreateVerifiedAccessInstanceResult extends SpeakeasyBase {
    verifiedAccessInstance?: CreateVerifiedAccessInstanceResultVerifiedAccessInstance;
}
