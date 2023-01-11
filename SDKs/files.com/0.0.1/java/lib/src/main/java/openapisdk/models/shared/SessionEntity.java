package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SessionEntity
 * Create user session (log in)
**/
public class SessionEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_2fa_method_sms")
    public Boolean allowed2faMethodSms;
    public SessionEntity withAllowed2faMethodSms(Boolean allowed2faMethodSms) {
        this.allowed2faMethodSms = allowed2faMethodSms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_2fa_method_totp")
    public Boolean allowed2faMethodTotp;
    public SessionEntity withAllowed2faMethodTotp(Boolean allowed2faMethodTotp) {
        this.allowed2faMethodTotp = allowed2faMethodTotp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_2fa_method_u2f")
    public Boolean allowed2faMethodU2f;
    public SessionEntity withAllowed2faMethodU2f(Boolean allowed2faMethodU2f) {
        this.allowed2faMethodU2f = allowed2faMethodU2f;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_2fa_method_yubi")
    public Boolean allowed2faMethodYubi;
    public SessionEntity withAllowed2faMethodYubi(Boolean allowed2faMethodYubi) {
        this.allowed2faMethodYubi = allowed2faMethodYubi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SessionEntity withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public SessionEntity withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("login_token")
    public String loginToken;
    public SessionEntity withLoginToken(String loginToken) {
        this.loginToken = loginToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("login_token_domain")
    public String loginTokenDomain;
    public SessionEntity withLoginTokenDomain(String loginTokenDomain) {
        this.loginTokenDomain = loginTokenDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_dir_listing_size")
    public Integer maxDirListingSize;
    public SessionEntity withMaxDirListingSize(Integer maxDirListingSize) {
        this.maxDirListingSize = maxDirListingSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiple_regions")
    public Boolean multipleRegions;
    public SessionEntity withMultipleRegions(Boolean multipleRegions) {
        this.multipleRegions = multipleRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("read_only")
    public Boolean readOnly;
    public SessionEntity withReadOnly(Boolean readOnly) {
        this.readOnly = readOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("root_path")
    public String rootPath;
    public SessionEntity withRootPath(String rootPath) {
        this.rootPath = rootPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_id")
    public Integer siteId;
    public SessionEntity withSiteId(Integer siteId) {
        this.siteId = siteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssl_required")
    public Boolean sslRequired;
    public SessionEntity withSslRequired(Boolean sslRequired) {
        this.sslRequired = sslRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tls_disabled")
    public Boolean tlsDisabled;
    public SessionEntity withTlsDisabled(Boolean tlsDisabled) {
        this.tlsDisabled = tlsDisabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("two_factor_setup_needed")
    public Boolean twoFactorSetupNeeded;
    public SessionEntity withTwoFactorSetupNeeded(Boolean twoFactorSetupNeeded) {
        this.twoFactorSetupNeeded = twoFactorSetupNeeded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_provided_modified_at")
    public Boolean useProvidedModifiedAt;
    public SessionEntity withUseProvidedModifiedAt(Boolean useProvidedModifiedAt) {
        this.useProvidedModifiedAt = useProvidedModifiedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("windows_mode_ftp")
    public Boolean windowsModeFtp;
    public SessionEntity withWindowsModeFtp(Boolean windowsModeFtp) {
        this.windowsModeFtp = windowsModeFtp;
        return this;
    }
}