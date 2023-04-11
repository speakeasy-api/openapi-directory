import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class ModifyVerifiedAccessInstanceResultVerifiedAccessInstanceTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of device-based trust provider.
 */
export declare enum ModifyVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProvidersDeviceTrustProviderTypeEnum {
    Jamf = "jamf",
    Crowdstrike = "crowdstrike"
}
/**
 * The type of trust provider (user- or device-based).
 */
export declare enum ModifyVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProvidersTrustProviderTypeEnum {
    User = "user",
    Device = "device"
}
/**
 * The type of user-based trust provider.
 */
export declare enum ModifyVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProvidersUserTrustProviderTypeEnum {
    IamIdentityCenter = "iam-identity-center",
    Oidc = "oidc"
}
/**
 * Condensed information about a trust provider.
 */
export declare class ModifyVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProviders extends SpeakeasyBase {
    description?: string;
    deviceTrustProviderType?: ModifyVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProvidersDeviceTrustProviderTypeEnum;
    trustProviderType?: ModifyVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProvidersTrustProviderTypeEnum;
    userTrustProviderType?: ModifyVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProvidersUserTrustProviderTypeEnum;
    verifiedAccessTrustProviderId?: string;
}
/**
 * The ID of the Amazon Web Services Verified Access instance.
 */
export declare class ModifyVerifiedAccessInstanceResultVerifiedAccessInstance extends SpeakeasyBase {
    creationTime?: string;
    description?: string;
    lastUpdatedTime?: string;
    tags?: ModifyVerifiedAccessInstanceResultVerifiedAccessInstanceTags[];
    verifiedAccessInstanceId?: string;
    verifiedAccessTrustProviders?: ModifyVerifiedAccessInstanceResultVerifiedAccessInstanceVerifiedAccessTrustProviders[];
}
/**
 * Success
 */
export declare class ModifyVerifiedAccessInstanceResult extends SpeakeasyBase {
    verifiedAccessInstance?: ModifyVerifiedAccessInstanceResultVerifiedAccessInstance;
}
