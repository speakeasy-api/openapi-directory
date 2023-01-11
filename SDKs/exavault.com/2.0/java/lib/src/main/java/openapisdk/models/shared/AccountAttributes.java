package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class AccountAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountName")
    public String accountName;
    public AccountAttributes withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountOnboarding")
    public Boolean accountOnboarding;
    public AccountAttributes withAccountOnboarding(Boolean accountOnboarding) {
        this.accountOnboarding = accountOnboarding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedIp")
    public AccountAttributesAllowedIp[] allowedIp;
    public AccountAttributes withAllowedIp(AccountAttributesAllowedIp[] allowedIp) {
        this.allowedIp = allowedIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branding")
    public Boolean branding;
    public AccountAttributes withBranding(Boolean branding) {
        this.branding = branding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brandingSettings")
    public BrandingSettings brandingSettings;
    public AccountAttributes withBrandingSettings(BrandingSettings brandingSettings) {
        this.brandingSettings = brandingSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public Integer clientId;
    public AccountAttributes withClientId(Integer clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complexPasswords")
    public Boolean complexPasswords;
    public AccountAttributes withComplexPasswords(Boolean complexPasswords) {
        this.complexPasswords = complexPasswords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public AccountAttributes withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customDomain")
    public Boolean customDomain;
    public AccountAttributes withCustomDomain(Boolean customDomain) {
        this.customDomain = customDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customSignature")
    public String customSignature;
    public AccountAttributes withCustomSignature(String customSignature) {
        this.customSignature = customSignature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalDomains")
    public String[] externalDomains;
    public AccountAttributes withExternalDomains(String[] externalDomains) {
        this.externalDomains = externalDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxUsers")
    public Integer maxUsers;
    public AccountAttributes withMaxUsers(Integer maxUsers) {
        this.maxUsers = maxUsers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("modified")
    public OffsetDateTime modified;
    public AccountAttributes withModified(OffsetDateTime modified) {
        this.modified = modified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("planDetails")
    public PlanDetails planDetails;
    public AccountAttributes withPlanDetails(PlanDetails planDetails) {
        this.planDetails = planDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quota")
    public Quota quota;
    public AccountAttributes withQuota(Quota quota) {
        this.quota = quota;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secureOnly")
    public Boolean secureOnly;
    public AccountAttributes withSecureOnly(Boolean secureOnly) {
        this.secureOnly = secureOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("showReferralLinks")
    public Boolean showReferralLinks;
    public AccountAttributes withShowReferralLinks(Boolean showReferralLinks) {
        this.showReferralLinks = showReferralLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Integer status;
    public AccountAttributes withStatus(Integer status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userCount")
    public Integer userCount;
    public AccountAttributes withUserCount(Integer userCount) {
        this.userCount = userCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("welcomeEmailContent")
    public String welcomeEmailContent;
    public AccountAttributes withWelcomeEmailContent(String welcomeEmailContent) {
        this.welcomeEmailContent = welcomeEmailContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("welcomeEmailSubject")
    public String welcomeEmailSubject;
    public AccountAttributes withWelcomeEmailSubject(String welcomeEmailSubject) {
        this.welcomeEmailSubject = welcomeEmailSubject;
        return this;
    }
}