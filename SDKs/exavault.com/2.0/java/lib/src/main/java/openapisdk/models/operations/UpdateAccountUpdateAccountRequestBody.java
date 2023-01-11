package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAccountUpdateAccountRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountOnboarding")
    public Boolean accountOnboarding;
    public UpdateAccountUpdateAccountRequestBody withAccountOnboarding(Boolean accountOnboarding) {
        this.accountOnboarding = accountOnboarding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedIpRanges")
    public UpdateAccountUpdateAccountRequestBodyAllowedIpRanges[] allowedIpRanges;
    public UpdateAccountUpdateAccountRequestBody withAllowedIpRanges(UpdateAccountUpdateAccountRequestBodyAllowedIpRanges[] allowedIpRanges) {
        this.allowedIpRanges = allowedIpRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brandingSettings")
    public UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues brandingSettings;
    public UpdateAccountUpdateAccountRequestBody withBrandingSettings(UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues brandingSettings) {
        this.brandingSettings = brandingSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complexPasswords")
    public Boolean complexPasswords;
    public UpdateAccountUpdateAccountRequestBody withComplexPasswords(Boolean complexPasswords) {
        this.complexPasswords = complexPasswords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customSignature")
    public String customSignature;
    public UpdateAccountUpdateAccountRequestBody withCustomSignature(String customSignature) {
        this.customSignature = customSignature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailContent")
    public String emailContent;
    public UpdateAccountUpdateAccountRequestBody withEmailContent(String emailContent) {
        this.emailContent = emailContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailSubject")
    public String emailSubject;
    public UpdateAccountUpdateAccountRequestBody withEmailSubject(String emailSubject) {
        this.emailSubject = emailSubject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalDomain")
    public String externalDomain;
    public UpdateAccountUpdateAccountRequestBody withExternalDomain(String externalDomain) {
        this.externalDomain = externalDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quota")
    public UpdateAccountUpdateAccountRequestBodyAccountQuotaValues quota;
    public UpdateAccountUpdateAccountRequestBody withQuota(UpdateAccountUpdateAccountRequestBodyAccountQuotaValues quota) {
        this.quota = quota;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secureOnly")
    public Boolean secureOnly;
    public UpdateAccountUpdateAccountRequestBody withSecureOnly(Boolean secureOnly) {
        this.secureOnly = secureOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("showReferralLinks")
    public Boolean showReferralLinks;
    public UpdateAccountUpdateAccountRequestBody withShowReferralLinks(Boolean showReferralLinks) {
        this.showReferralLinks = showReferralLinks;
        return this;
    }
}