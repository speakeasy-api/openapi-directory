import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The options for device-identity type trust provider.
 */
export declare class DescribeVerifiedAccessTrustProvidersResultVerifiedAccessTrustProvidersDeviceOptions extends SpeakeasyBase {
    tenantId?: string;
}
/**
 * The type of device-based trust provider.
 */
export declare enum DescribeVerifiedAccessTrustProvidersResultVerifiedAccessTrustProvidersDeviceTrustProviderTypeEnum {
    Jamf = "jamf",
    Crowdstrike = "crowdstrike"
}
/**
 * The OpenID Connect details for an <code>oidc</code>-type, user-identity based trust provider.
 */
export declare class DescribeVerifiedAccessTrustProvidersResultVerifiedAccessTrustProvidersOidcOptions extends SpeakeasyBase {
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
export declare class DescribeVerifiedAccessTrustProvidersResultVerifiedAccessTrustProvidersTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of Verified Access trust provider.
 */
export declare enum DescribeVerifiedAccessTrustProvidersResultVerifiedAccessTrustProvidersTrustProviderTypeEnum {
    User = "user",
    Device = "device"
}
/**
 * The type of user-based trust provider.
 */
export declare enum DescribeVerifiedAccessTrustProvidersResultVerifiedAccessTrustProvidersUserTrustProviderTypeEnum {
    IamIdentityCenter = "iam-identity-center",
    Oidc = "oidc"
}
/**
 * Describes a Verified Access trust provider.
 */
export declare class DescribeVerifiedAccessTrustProvidersResultVerifiedAccessTrustProviders extends SpeakeasyBase {
    creationTime?: string;
    description?: string;
    deviceOptions?: DescribeVerifiedAccessTrustProvidersResultVerifiedAccessTrustProvidersDeviceOptions;
    deviceTrustProviderType?: DescribeVerifiedAccessTrustProvidersResultVerifiedAccessTrustProvidersDeviceTrustProviderTypeEnum;
    lastUpdatedTime?: string;
    oidcOptions?: DescribeVerifiedAccessTrustProvidersResultVerifiedAccessTrustProvidersOidcOptions;
    policyReferenceName?: string;
    tags?: DescribeVerifiedAccessTrustProvidersResultVerifiedAccessTrustProvidersTags[];
    trustProviderType?: DescribeVerifiedAccessTrustProvidersResultVerifiedAccessTrustProvidersTrustProviderTypeEnum;
    userTrustProviderType?: DescribeVerifiedAccessTrustProvidersResultVerifiedAccessTrustProvidersUserTrustProviderTypeEnum;
    verifiedAccessTrustProviderId?: string;
}
/**
 * Success
 */
export declare class DescribeVerifiedAccessTrustProvidersResult extends SpeakeasyBase {
    nextToken?: string;
    verifiedAccessTrustProviders?: DescribeVerifiedAccessTrustProvidersResultVerifiedAccessTrustProviders[];
}
