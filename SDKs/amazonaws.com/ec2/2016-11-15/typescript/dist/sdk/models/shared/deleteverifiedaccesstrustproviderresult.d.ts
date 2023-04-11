import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The options for device-identity type trust provider.
 */
export declare class DeleteVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderDeviceOptions extends SpeakeasyBase {
    tenantId?: string;
}
/**
 * The type of device-based trust provider.
 */
export declare enum DeleteVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderDeviceTrustProviderTypeEnum {
    Jamf = "jamf",
    Crowdstrike = "crowdstrike"
}
/**
 * The OpenID Connect details for an <code>oidc</code>-type, user-identity based trust provider.
 */
export declare class DeleteVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderOidcOptions extends SpeakeasyBase {
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
export declare class DeleteVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of Verified Access trust provider.
 */
export declare enum DeleteVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderTrustProviderTypeEnum {
    User = "user",
    Device = "device"
}
/**
 * The type of user-based trust provider.
 */
export declare enum DeleteVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderUserTrustProviderTypeEnum {
    IamIdentityCenter = "iam-identity-center",
    Oidc = "oidc"
}
/**
 * The ID of the Amazon Web Services Verified Access trust provider.
 */
export declare class DeleteVerifiedAccessTrustProviderResultVerifiedAccessTrustProvider extends SpeakeasyBase {
    creationTime?: string;
    description?: string;
    deviceOptions?: DeleteVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderDeviceOptions;
    deviceTrustProviderType?: DeleteVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderDeviceTrustProviderTypeEnum;
    lastUpdatedTime?: string;
    oidcOptions?: DeleteVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderOidcOptions;
    policyReferenceName?: string;
    tags?: DeleteVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderTags[];
    trustProviderType?: DeleteVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderTrustProviderTypeEnum;
    userTrustProviderType?: DeleteVerifiedAccessTrustProviderResultVerifiedAccessTrustProviderUserTrustProviderTypeEnum;
    verifiedAccessTrustProviderId?: string;
}
/**
 * Success
 */
export declare class DeleteVerifiedAccessTrustProviderResult extends SpeakeasyBase {
    verifiedAccessTrustProvider?: DeleteVerifiedAccessTrustProviderResultVerifiedAccessTrustProvider;
}
