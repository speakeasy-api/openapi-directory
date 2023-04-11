import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class AttachVerifiedAccessTrustProviderResultVerifiedAccessInstanceTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of device-based trust provider.
 */
export declare enum AttachVerifiedAccessTrustProviderResultVerifiedAccessInstanceVerifiedAccessTrustProvidersDeviceTrustProviderTypeEnum {
    Jamf = "jamf",
    Crowdstrike = "crowdstrike"
}
/**
 * The type of trust provider (user- or device-based).
 */
export declare enum AttachVerifiedAccessTrustProviderResultVerifiedAccessInstanceVerifiedAccessTrustProvidersTrustProviderTypeEnum {
    User = "user",
    Device = "device"
}
/**
 * The type of user-based trust provider.
 */
export declare enum AttachVerifiedAccessTrustProviderResultVerifiedAccessInstanceVerifiedAccessTrustProvidersUserTrustProviderTypeEnum {
    IamIdentityCenter = "iam-identity-center",
    Oidc = "oidc"
}
/**
 * Condensed information about a trust provider.
 */
export declare class AttachVerifiedAccessTrustProviderResultVerifiedAccessInstanceVerifiedAccessTrustProviders extends SpeakeasyBase {
    description?: string;
    deviceTrustProviderType?: AttachVerifiedAccessTrustProviderResultVerifiedAccessInstanceVerifiedAccessTrustProvidersDeviceTrustProviderTypeEnum;
    trustProviderType?: AttachVerifiedAccessTrustProviderResultVerifiedAccessInstanceVerifiedAccessTrustProvidersTrustProviderTypeEnum;
    userTrustProviderType?: AttachVerifiedAccessTrustProviderResultVerifiedAccessInstanceVerifiedAccessTrustProvidersUserTrustProviderTypeEnum;
    verifiedAccessTrustProviderId?: string;
}
/**
 * The ID of the Amazon Web Services Verified Access instance.
 */
export declare class AttachVerifiedAccessTrustProviderResultVerifiedAccessInstance extends SpeakeasyBase {
    creationTime?: string;
    description?: string;
    lastUpdatedTime?: string;
    tags?: AttachVerifiedAccessTrustProviderResultVerifiedAccessInstanceTags[];
    verifiedAccessInstanceId?: string;
    verifiedAccessTrustProviders?: AttachVerifiedAccessTrustProviderResultVerifiedAccessInstanceVerifiedAccessTrustProviders[];
}
/**
 * The options for device-identity type trust provider.
 */
export declare class AttachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderDeviceOptions extends SpeakeasyBase {
    tenantId?: string;
}
/**
 * The type of device-based trust provider.
 */
export declare enum AttachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderDeviceTrustProviderTypeEnum {
    Jamf = "jamf",
    Crowdstrike = "crowdstrike"
}
/**
 * The OpenID Connect details for an <code>oidc</code>-type, user-identity based trust provider.
 */
export declare class AttachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderOidcOptions extends SpeakeasyBase {
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
export declare class AttachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of Verified Access trust provider.
 */
export declare enum AttachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderTrustProviderTypeEnum {
    User = "user",
    Device = "device"
}
/**
 * The type of user-based trust provider.
 */
export declare enum AttachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderUserTrustProviderTypeEnum {
    IamIdentityCenter = "iam-identity-center",
    Oidc = "oidc"
}
/**
 * The ID of the Amazon Web Services Verified Access trust provider.
 */
export declare class AttachVerifiedAccessTrustProviderResultVerifiedAccessTrustProvider extends SpeakeasyBase {
    creationTime?: string;
    description?: string;
    deviceOptions?: AttachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderDeviceOptions;
    deviceTrustProviderType?: AttachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderDeviceTrustProviderTypeEnum;
    lastUpdatedTime?: string;
    oidcOptions?: AttachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderOidcOptions;
    policyReferenceName?: string;
    tags?: AttachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderTags[];
    trustProviderType?: AttachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderTrustProviderTypeEnum;
    userTrustProviderType?: AttachVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderUserTrustProviderTypeEnum;
    verifiedAccessTrustProviderId?: string;
}
/**
 * Success
 */
export declare class AttachVerifiedAccessTrustProviderResult extends SpeakeasyBase {
    verifiedAccessInstance?: AttachVerifiedAccessTrustProviderResultVerifiedAccessInstance;
    verifiedAccessTrustProvider?: AttachVerifiedAccessTrustProviderResultVerifiedAccessTrustProvider;
}
