package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplicationSettingsResource
 * Provides information about an application, including the default settings for an application.
**/
public class ApplicationSettingsResource {
    @JsonProperty("ApplicationId")
    public String applicationId;
    public ApplicationSettingsResource withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CampaignHook")
    public CampaignHook campaignHook;
    public ApplicationSettingsResource withCampaignHook(CampaignHook campaignHook) {
        this.campaignHook = campaignHook;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastModifiedDate")
    public String lastModifiedDate;
    public ApplicationSettingsResource withLastModifiedDate(String lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limits")
    public CampaignLimits limits;
    public ApplicationSettingsResource withLimits(CampaignLimits limits) {
        this.limits = limits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuietTime")
    public QuietTime quietTime;
    public ApplicationSettingsResource withQuietTime(QuietTime quietTime) {
        this.quietTime = quietTime;
        return this;
    }
}