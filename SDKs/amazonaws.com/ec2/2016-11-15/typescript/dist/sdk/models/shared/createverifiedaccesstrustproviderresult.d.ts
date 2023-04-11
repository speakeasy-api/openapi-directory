import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The options for device-identity type trust provider.
 */
export declare class CreateVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderDeviceOptions extends SpeakeasyBase {
    tenantId?: string;
}
/**
 * The type of device-based trust provider.
 */
export declare enum CreateVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderDeviceTrustProviderTypeEnum {
    Jamf = "jamf",
    Crowdstrike = "crowdstrike"
}
/**
 * The OpenID Connect details for an <code>oidc</code>-type, user-identity based trust provider.
 */
export declare class CreateVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderOidcOptions extends SpeakeasyBase {
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
export declare class CreateVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of Verified Access trust provider.
 */
export declare enum CreateVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderTrustProviderTypeEnum {
    User = "user",
    Device = "device"
}
/**
 * The type of user-based trust provider.
 */
export declare enum CreateVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderUserTrustProviderTypeEnum {
    IamIdentityCenter = "iam-identity-center",
    Oidc = "oidc"
}
/**
 * The ID of the Amazon Web Services Verified Access trust provider.
 */
export declare class CreateVerifiedAccessTrustProviderResultVerifiedAccessTrustProvider extends SpeakeasyBase {
    creationTime?: string;
    description?: string;
    deviceOptions?: CreateVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderDeviceOptions;
    deviceTrustProviderType?: CreateVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderDeviceTrustProviderTypeEnum;
    lastUpdatedTime?: string;
    oidcOptions?: CreateVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderOidcOptions;
    policyReferenceName?: string;
    tags?: CreateVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderTags[];
    trustProviderType?: CreateVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderTrustProviderTypeEnum;
    userTrustProviderType?: CreateVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderUserTrustProviderTypeEnum;
    verifiedAccessTrustProviderId?: string;
}
/**
 * Success
 */
export declare class CreateVerifiedAccessTrustProviderResult extends SpeakeasyBase {
    verifiedAccessTrustProvider?: CreateVerifiedAccessTrustProviderResultVerifiedAccessTrustProvider;
}
