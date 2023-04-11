import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DeleteVerifiedAccessInstanceResultVerifiedAccessInstanceTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of device-based trust provider.
 */
export declare enum DeleteVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProvidersDeviceTrustProviderTypeEnum {
    Jamf = "jamf",
    Crowdstrike = "crowdstrike"
}
/**
 * The type of trust provider (user- or device-based).
 */
export declare enum DeleteVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProvidersTrustProviderTypeEnum {
    User = "user",
    Device = "device"
}
/**
 * The type of user-based trust provider.
 */
export declare enum DeleteVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProvidersUserTrustProviderTypeEnum {
    IamIdentityCenter = "iam-identity-center",
    Oidc = "oidc"
}
/**
 * Condensed information about a trust provider.
 */
export declare class DeleteVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProviders extends SpeakeasyBase {
    description?: string;
    deviceTrustProviderType?: DeleteVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProvidersDeviceTrustProviderTypeEnum;
    trustProviderType?: DeleteVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProvidersTrustProviderTypeEnum;
    userTrustProviderType?: DeleteVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProvidersUserTrustProviderTypeEnum;
    verifiedAccessTrustProviderId?: string;
}
/**
 * The ID of the Amazon Web Services Verified Access instance.
 */
export declare class DeleteVerifiedAccessInstanceResultVerifiedAccessInstance extends SpeakeasyBase {
    creationTime?: string;
    description?: string;
    lastUpdatedTime?: string;
    tags?: DeleteVerifiedAccessInstanceResultVerifiedAccessInstanceTags[];
    verifiedAccessInstanceId?: string;
    verifiedAccessTrustProviders?: DeleteVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProviders[];
}
/**
 * Success
 */
export declare class DeleteVerifiedAccessInstanceResult extends SpeakeasyBase {
    verifiedAccessInstance?: DeleteVerifiedAccessInstanceResultVerifiedAccessInstance;
}
