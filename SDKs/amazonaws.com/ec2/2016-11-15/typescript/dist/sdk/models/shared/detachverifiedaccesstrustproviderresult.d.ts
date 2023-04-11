import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DetachVerifiedAccessTrustProviderResultVerifiedAccessInstanceTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of device-based trust provider.
 */
export declare enum DetachVerifiedAccessTrustProviderResultVerifiedAccessInstanceVerifiedAccessTrustProvidersDeviceTrustProviderTypeEnum {
    Jamf = "jamf",
    Crowdstrike = "crowdstrike"
}
/**
 * The type of trust provider (user- or device-based).
 */
export declare enum DetachVerifiedAccessTrustProviderResultVerifiedAccessInstanceVerifiedAccessTrustProvidersTrustProviderTypeEnum {
    User = "user",
    Device = "device"
}
/**
 * The type of user-based trust provider.
 */
export declare enum DetachVerifiedAccessTrustProviderResultVerifiedAccessInstanceVerifiedAccessTrustProvidersUserTrustProviderTypeEnum {
    IamIdentityCenter = "iam-identity-center",
    Oidc = "oidc"
}
/**
 * Condensed information about a trust provider.
 */
export declare class DetachVerifiedAccessTrustProviderResultVerifiedAccessInstanceVerifiedAccessTrustProviders extends SpeakeasyBase {
    description?: string;
    deviceTrustProviderType?: DetachVerifiedAccessTrustProviderResultVerifiedAccessInstanceVerifiedAccessTrustProvidersDeviceTrustProviderTypeEnum;
    trustProviderType?: DetachVerifiedAccessTrustProviderResultVerifiedAccessInstanceVerifiedAccessTrustProvidersTrustProviderTypeEnum;
    userTrustProviderType?: DetachVerifiedAccessTrustProviderResultVerifiedAccessInstanceVerifiedAccessTrustProvidersUserTrustProviderTypeEnum;
    verifiedAccessTrustProviderId?: string;
}
/**
 * The ID of the Amazon Web Services Verified Access instance.
 */
export declare class DetachVerifiedAccessTrustProviderResultVerifiedAccessInstance extends SpeakeasyBase {
    creationTime?: string;
    description?: string;
    lastUpdatedTime?: string;
    tags?: DetachVerifiedAccessTrustProviderResultVerifiedAccessInstanceTags[];
    verifiedAccessInstanceId?: string;
    verifiedAccessTrustProviders?: DetachVerifiedAccessTrustProviderResultVerifiedAccessInstanceVerifiedAccessTrustProviders[];
}
/**
 * The options for device-identity type trust provider.
 */
export declare class DetachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderDeviceOptions extends SpeakeasyBase {
    tenantId?: string;
}
/**
 * The type of device-based trust provider.
 */
export declare enum DetachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderDeviceTrustProviderTypeEnum {
    Jamf = "jamf",
    Crowdstrike = "crowdstrike"
}
/**
 * The OpenID Connect details for an <code>oidc</code>-type, user-identity based trust provider.
 */
export declare class DetachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderOidcOptions extends SpeakeasyBase {
    authorizationEndpoint?: string;
    clientId?: string;
    clientSecret?: string;
    issuer?: string;
    scope?: string;
    tokenEndpoint?: string;
    userInfoEndpoint?: string;
}
/**
 * Describes a tag.
 */
export declare class DetachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of Verified Access trust provider.
 */
export declare enum DetachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderTrustProviderTypeEnum {
    User = "user",
    Device = "device"
}
/**
 * The type of user-based trust provider.
 */
export declare enum DetachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderUserTrustProviderTypeEnum {
    IamIdentityCenter = "iam-identity-center",
    Oidc = "oidc"
}
/**
 * The ID of the Amazon Web Services Verified Access trust provider.
 */
export declare class DetachVerifiedAccessTrustProviderResultVerifiedAccessTrustProvider extends SpeakeasyBase {
    creationTime?: string;
    description?: string;
    deviceOptions?: DetachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderDeviceOptions;
    deviceTrustProviderType?: DetachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderDeviceTrustProviderTypeEnum;
    lastUpdatedTime?: string;
    oidcOptions?: DetachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderOidcOptions;
    policyReferenceName?: string;
    tags?: DetachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderTags[];
    trustProviderType?: DetachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderTrustProviderTypeEnum;
    userTrustProviderType?: DetachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderUserTrustProviderTypeEnum;
    verifiedAccessTrustProviderId?: string;
}
/**
 * Success
 */
export declare class DetachVerifiedAccessTrustProviderResult extends SpeakeasyBase {
    verifiedAccessInstance?: DetachVerifiedAccessTrustProviderResultVerifiedAccessInstance;
    verifiedAccessTrustProvider?: DetachVerifiedAccessTrustProviderResultVerifiedAccessTrustProvider;
}
