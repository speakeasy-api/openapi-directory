import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The options for device-identity type trust provider.
 */
export declare class ModifyVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderDeviceOptions extends SpeakeasyBase {
    tenantId?: string;
}
/**
 * The type of device-based trust provider.
 */
export declare enum ModifyVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderDeviceTrustProviderTypeEnum {
    Jamf = "jamf",
    Crowdstrike = "crowdstrike"
}
/**
 * The OpenID Connect details for an <code>oidc</code>-type, user-identity based trust provider.
 */
export declare class ModifyVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderOidcOptions extends SpeakeasyBase {
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
export declare class ModifyVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of Verified Access trust provider.
 */
export declare enum ModifyVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderTrustProviderTypeEnum {
    User = "user",
    Device = "device"
}
/**
 * The type of user-based trust provider.
 */
export declare enum ModifyVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderUserTrustProviderTypeEnum {
    IamIdentityCenter = "iam-identity-center",
    Oidc = "oidc"
}
/**
 * The ID of the Amazon Web Services Verified Access trust provider.
 */
export declare class ModifyVerifiedAccessTrustProviderResultVerifiedAccessTrustProvider extends SpeakeasyBase {
    creationTime?: string;
    description?: string;
    deviceOptions?: ModifyVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderDeviceOptions;
    deviceTrustProviderType?: ModifyVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderDeviceTrustProviderTypeEnum;
    lastUpdatedTime?: string;
    oidcOptions?: ModifyVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderOidcOptions;
    policyReferenceName?: string;
    tags?: ModifyVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderTags[];
    trustProviderType?: ModifyVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderTrustProviderTypeEnum;
    userTrustProviderType?: ModifyVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderUserTrustProviderTypeEnum;
    verifiedAccessTrustProviderId?: string;
}
/**
 * Success
 */
export declare class ModifyVerifiedAccessTrustProviderResult extends SpeakeasyBase {
    verifiedAccessTrustProvider?: ModifyVerifiedAccessTrustProviderResultVerifiedAccessTrustProvider;
}
