package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SsoStrategyEntity
 * List Sso Strategies
**/
public class SsoStrategyEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deprovision_behavior")
    public SsoStrategyEntityDeprovisionBehaviorEnum deprovisionBehavior;
    public SsoStrategyEntity withDeprovisionBehavior(SsoStrategyEntityDeprovisionBehaviorEnum deprovisionBehavior) {
        this.deprovisionBehavior = deprovisionBehavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deprovision_groups")
    public Boolean deprovisionGroups;
    public SsoStrategyEntity withDeprovisionGroups(Boolean deprovisionGroups) {
        this.deprovisionGroups = deprovisionGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deprovision_users")
    public Boolean deprovisionUsers;
    public SsoStrategyEntity withDeprovisionUsers(Boolean deprovisionUsers) {
        this.deprovisionUsers = deprovisionUsers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public SsoStrategyEntity withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public SsoStrategyEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public SsoStrategyEntity withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_base_dn")
    public String ldapBaseDn;
    public SsoStrategyEntity withLdapBaseDn(String ldapBaseDn) {
        this.ldapBaseDn = ldapBaseDn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_domain")
    public String ldapDomain;
    public SsoStrategyEntity withLdapDomain(String ldapDomain) {
        this.ldapDomain = ldapDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_host")
    public String ldapHost;
    public SsoStrategyEntity withLdapHost(String ldapHost) {
        this.ldapHost = ldapHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_host_2")
    public String ldapHost2;
    public SsoStrategyEntity withLdapHost2(String ldapHost2) {
        this.ldapHost2 = ldapHost2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_host_3")
    public String ldapHost3;
    public SsoStrategyEntity withLdapHost3(String ldapHost3) {
        this.ldapHost3 = ldapHost3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_port")
    public Integer ldapPort;
    public SsoStrategyEntity withLdapPort(Integer ldapPort) {
        this.ldapPort = ldapPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_secure")
    public Boolean ldapSecure;
    public SsoStrategyEntity withLdapSecure(Boolean ldapSecure) {
        this.ldapSecure = ldapSecure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_username")
    public String ldapUsername;
    public SsoStrategyEntity withLdapUsername(String ldapUsername) {
        this.ldapUsername = ldapUsername;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_username_field")
    public SsoStrategyEntityLdapUsernameFieldEnum ldapUsernameField;
    public SsoStrategyEntity withLdapUsernameField(SsoStrategyEntityLdapUsernameFieldEnum ldapUsernameField) {
        this.ldapUsernameField = ldapUsernameField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logo_url")
    public String logoUrl;
    public SsoStrategyEntity withLogoUrl(String logoUrl) {
        this.logoUrl = logoUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public SsoStrategyEntityProtocolEnum protocol;
    public SsoStrategyEntity withProtocol(SsoStrategyEntityProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider")
    public SsoStrategyEntityProviderEnum provider;
    public SsoStrategyEntity withProvider(SsoStrategyEntityProviderEnum provider) {
        this.provider = provider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provision_attachments_permission")
    public Boolean provisionAttachmentsPermission;
    public SsoStrategyEntity withProvisionAttachmentsPermission(Boolean provisionAttachmentsPermission) {
        this.provisionAttachmentsPermission = provisionAttachmentsPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provision_company")
    public String provisionCompany;
    public SsoStrategyEntity withProvisionCompany(String provisionCompany) {
        this.provisionCompany = provisionCompany;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provision_dav_permission")
    public Boolean provisionDavPermission;
    public SsoStrategyEntity withProvisionDavPermission(Boolean provisionDavPermission) {
        this.provisionDavPermission = provisionDavPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provision_email_signup_groups")
    public String provisionEmailSignupGroups;
    public SsoStrategyEntity withProvisionEmailSignupGroups(String provisionEmailSignupGroups) {
        this.provisionEmailSignupGroups = provisionEmailSignupGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provision_ftp_permission")
    public Boolean provisionFtpPermission;
    public SsoStrategyEntity withProvisionFtpPermission(Boolean provisionFtpPermission) {
        this.provisionFtpPermission = provisionFtpPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provision_group_default")
    public String provisionGroupDefault;
    public SsoStrategyEntity withProvisionGroupDefault(String provisionGroupDefault) {
        this.provisionGroupDefault = provisionGroupDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provision_group_exclusion")
    public String provisionGroupExclusion;
    public SsoStrategyEntity withProvisionGroupExclusion(String provisionGroupExclusion) {
        this.provisionGroupExclusion = provisionGroupExclusion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provision_group_inclusion")
    public String provisionGroupInclusion;
    public SsoStrategyEntity withProvisionGroupInclusion(String provisionGroupInclusion) {
        this.provisionGroupInclusion = provisionGroupInclusion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provision_group_required")
    public String provisionGroupRequired;
    public SsoStrategyEntity withProvisionGroupRequired(String provisionGroupRequired) {
        this.provisionGroupRequired = provisionGroupRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provision_groups")
    public Boolean provisionGroups;
    public SsoStrategyEntity withProvisionGroups(Boolean provisionGroups) {
        this.provisionGroups = provisionGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provision_sftp_permission")
    public Boolean provisionSftpPermission;
    public SsoStrategyEntity withProvisionSftpPermission(Boolean provisionSftpPermission) {
        this.provisionSftpPermission = provisionSftpPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provision_site_admin_groups")
    public String provisionSiteAdminGroups;
    public SsoStrategyEntity withProvisionSiteAdminGroups(String provisionSiteAdminGroups) {
        this.provisionSiteAdminGroups = provisionSiteAdminGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provision_time_zone")
    public String provisionTimeZone;
    public SsoStrategyEntity withProvisionTimeZone(String provisionTimeZone) {
        this.provisionTimeZone = provisionTimeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provision_users")
    public Boolean provisionUsers;
    public SsoStrategyEntity withProvisionUsers(Boolean provisionUsers) {
        this.provisionUsers = provisionUsers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saml_provider_cert_fingerprint")
    public String samlProviderCertFingerprint;
    public SsoStrategyEntity withSamlProviderCertFingerprint(String samlProviderCertFingerprint) {
        this.samlProviderCertFingerprint = samlProviderCertFingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saml_provider_issuer_url")
    public String samlProviderIssuerUrl;
    public SsoStrategyEntity withSamlProviderIssuerUrl(String samlProviderIssuerUrl) {
        this.samlProviderIssuerUrl = samlProviderIssuerUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saml_provider_metadata_content")
    public String samlProviderMetadataContent;
    public SsoStrategyEntity withSamlProviderMetadataContent(String samlProviderMetadataContent) {
        this.samlProviderMetadataContent = samlProviderMetadataContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saml_provider_metadata_url")
    public String samlProviderMetadataUrl;
    public SsoStrategyEntity withSamlProviderMetadataUrl(String samlProviderMetadataUrl) {
        this.samlProviderMetadataUrl = samlProviderMetadataUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saml_provider_slo_target_url")
    public String samlProviderSloTargetUrl;
    public SsoStrategyEntity withSamlProviderSloTargetUrl(String samlProviderSloTargetUrl) {
        this.samlProviderSloTargetUrl = samlProviderSloTargetUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saml_provider_sso_target_url")
    public String samlProviderSsoTargetUrl;
    public SsoStrategyEntity withSamlProviderSsoTargetUrl(String samlProviderSsoTargetUrl) {
        this.samlProviderSsoTargetUrl = samlProviderSsoTargetUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scim_authentication_method")
    public SsoStrategyEntityScimAuthenticationMethodEnum scimAuthenticationMethod;
    public SsoStrategyEntity withScimAuthenticationMethod(SsoStrategyEntityScimAuthenticationMethodEnum scimAuthenticationMethod) {
        this.scimAuthenticationMethod = scimAuthenticationMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scim_oauth_access_token")
    public String scimOauthAccessToken;
    public SsoStrategyEntity withScimOauthAccessToken(String scimOauthAccessToken) {
        this.scimOauthAccessToken = scimOauthAccessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scim_oauth_access_token_expires_at")
    public String scimOauthAccessTokenExpiresAt;
    public SsoStrategyEntity withScimOauthAccessTokenExpiresAt(String scimOauthAccessTokenExpiresAt) {
        this.scimOauthAccessTokenExpiresAt = scimOauthAccessTokenExpiresAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scim_username")
    public String scimUsername;
    public SsoStrategyEntity withScimUsername(String scimUsername) {
        this.scimUsername = scimUsername;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subdomain")
    public String subdomain;
    public SsoStrategyEntity withSubdomain(String subdomain) {
        this.subdomain = subdomain;
        return this;
    }
}