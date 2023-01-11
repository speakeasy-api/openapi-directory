package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InsightsConfiguration
 * The structure containing configurations related to insights.
**/
public class InsightsConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InsightsEnabled")
    public Boolean insightsEnabled;
    public InsightsConfiguration withInsightsEnabled(Boolean insightsEnabled) {
        this.insightsEnabled = insightsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotificationsEnabled")
    public Boolean notificationsEnabled;
    public InsightsConfiguration withNotificationsEnabled(Boolean notificationsEnabled) {
        this.notificationsEnabled = notificationsEnabled;
        return this;
    }
}