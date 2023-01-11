package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest
 * Specifies the default settings for an application.
**/
public class UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CampaignHook")
    public openapisdk.models.shared.CampaignHook campaignHook;
    public UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest withCampaignHook(openapisdk.models.shared.CampaignHook campaignHook) {
        this.campaignHook = campaignHook;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchMetricsEnabled")
    public Boolean cloudWatchMetricsEnabled;
    public UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest withCloudWatchMetricsEnabled(Boolean cloudWatchMetricsEnabled) {
        this.cloudWatchMetricsEnabled = cloudWatchMetricsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventTaggingEnabled")
    public Boolean eventTaggingEnabled;
    public UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest withEventTaggingEnabled(Boolean eventTaggingEnabled) {
        this.eventTaggingEnabled = eventTaggingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limits")
    public openapisdk.models.shared.CampaignLimits limits;
    public UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest withLimits(openapisdk.models.shared.CampaignLimits limits) {
        this.limits = limits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuietTime")
    public openapisdk.models.shared.QuietTime quietTime;
    public UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest withQuietTime(openapisdk.models.shared.QuietTime quietTime) {
        this.quietTime = quietTime;
        return this;
    }
}