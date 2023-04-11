import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Method used for deprovisioning users.
 */
export declare enum SsoStrategyEntityDeprovisionBehaviorEnum {
    Disable = "disable",
    Delete = "delete"
}
/**
 * LDAP username field
 */
export declare enum SsoStrategyEntityLdapUsernameFieldEnum {
    SAMAccountName = "sAMAccountName",
    UserPrincipalName = "userPrincipalName"
}
/**
 * SSO Protocol
 */
export declare enum SsoStrategyEntityProtocolEnum {
    Oauth2 = "oauth2",
    UnusedOpenid2 = "_unused_openid2",
    Saml = "saml",
    ActiveDirectory = "active_directory",
    OpenLdap = "open_ldap",
    Scim = "scim"
}
/**
 * Provider name
 */
export declare enum SsoStrategyEntityProviderEnum {
    Google = "google",
    Auth0 = "auth0",
    Okta = "okta",
    Atlassian = "atlassian",
    Azure = "azure",
    Box = "box",
    Dropbox = "dropbox",
    Slack = "slack",
    UnusedUbuntu = "_unused_ubuntu",
    Onelogin = "onelogin",
    Saml = "saml",
    Idaptive = "idaptive",
    Ldap = "ldap",
    Scim = "scim"
}
/**
 * SCIM authentication type.
 */
export declare enum SsoStrategyEntityScimAuthenticationMethodEnum {
    None = "none",
    Basic = "basic",
    Token = "token"
}
/**
 * List Sso Strategies
 */
export declare class SsoStrategyEntity extends SpeakeasyBase {
    /**
     * Method used for deprovisioning users.
     */
    deprovisionBehavior?: SsoStrategyEntityDeprovisionBehaviorEnum;
    /**
     * Auto-deprovision group membership based on group memberships on the SSO side?
     */
    deprovisionGroups?: boolean;
    /**
     * Auto-deprovision users?
     */
    deprovisionUsers?: boolean;
    /**
     * Is strategy enabled?  This may become automatically set to `false` after a high number and duration of failures.
     */
    enabled?: boolean;
    /**
     * ID
     */
    id?: number;
    /**
     * Custom label for the SSO provider on the login page.
     */
    label?: string;
    /**
     * Base DN for looking up users in LDAP server
     */
    ldapBaseDn?: string;
    /**
     * Domain name that will be appended to LDAP usernames
     */
    ldapDomain?: string;
    /**
     * LDAP host
     */
    ldapHost?: string;
    /**
     * LDAP backup host
     */
    ldapHost2?: string;
    /**
     * LDAP backup host
     */
    ldapHost3?: string;
    /**
     * LDAP port
     */
    ldapPort?: number;
    /**
     * Use secure LDAP?
     */
    ldapSecure?: boolean;
    /**
     * Username for signing in to LDAP server.
     */
    ldapUsername?: string;
    /**
     * LDAP username field
     */
    ldapUsernameField?: SsoStrategyEntityLdapUsernameFieldEnum;
    /**
     * URL holding a custom logo for the SSO provider on the login page.
     */
    logoUrl?: string;
    /**
     * SSO Protocol
     */
    protocol?: SsoStrategyEntityProtocolEnum;
    /**
     * Provider name
     */
    provider?: SsoStrategyEntityProviderEnum;
    /**
     * DEPRECATED: Auto-provisioned users get Sharing permission. Use a Group with the Bundle permission instead.
     */
    provisionAttachmentsPermission?: boolean;
    /**
     * Default company for auto provisioned users.
     */
    provisionCompany?: string;
    /**
     * Auto-provisioned users get WebDAV permission?
     */
    provisionDavPermission?: boolean;
    /**
     * Comma-separated list of group names whose members will be created with email_signup authentication.
     */
    provisionEmailSignupGroups?: string;
    /**
     * Auto-provisioned users get FTP permission?
     */
    provisionFtpPermission?: boolean;
    /**
     * Comma-separated list of group names for groups to automatically add all auto-provisioned users to.
     */
    provisionGroupDefault?: string;
    /**
     * Comma-separated list of group names for groups (with optional wildcards) that will be excluded from auto-provisioning.
     */
    provisionGroupExclusion?: string;
    /**
     * Comma-separated list of group names for groups (with optional wildcards) that will be auto-provisioned.
     */
    provisionGroupInclusion?: string;
    /**
     * Comma or newline separated list of group names (with optional wildcards) to require membership for user provisioning.
     */
    provisionGroupRequired?: string;
    /**
     * Auto-provision group membership based on group memberships on the SSO side?
     */
    provisionGroups?: boolean;
    /**
     * Auto-provisioned users get SFTP permission?
     */
    provisionSftpPermission?: boolean;
    /**
     * Comma-separated list of group names whose members will be created as Site Admins.
     */
    provisionSiteAdminGroups?: string;
    /**
     * Default time zone for auto provisioned users.
     */
    provisionTimeZone?: string;
    /**
     * Auto-provision users?
     */
    provisionUsers?: boolean;
    /**
     * Identity provider sha256 cert fingerprint if saml_provider_metadata_url is not available.
     */
    samlProviderCertFingerprint?: string;
    /**
     * Identity provider issuer url
     */
    samlProviderIssuerUrl?: string;
    /**
     * Custom identity provider metadata
     */
    samlProviderMetadataContent?: string;
    /**
     * Metadata URL for the SAML identity provider
     */
    samlProviderMetadataUrl?: string;
    /**
     * Identity provider SLO endpoint
     */
    samlProviderSloTargetUrl?: string;
    /**
     * Identity provider SSO endpoint if saml_provider_metadata_url is not available.
     */
    samlProviderSsoTargetUrl?: string;
    /**
     * SCIM authentication type.
     */
    scimAuthenticationMethod?: SsoStrategyEntityScimAuthenticationMethodEnum;
    /**
     * SCIM OAuth Access Token.
     */
    scimOauthAccessToken?: string;
    /**
     * SCIM OAuth Access Token Expiration Time.
     */
    scimOauthAccessTokenExpiresAt?: string;
    /**
     * SCIM username.
     */
    scimUsername?: string;
    /**
     * Subdomain
     */
    subdomain?: string;
}
