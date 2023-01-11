package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateGroupRequestBodyInsightsConfiguration
 * The structure containing configurations related to insights.
**/
public class UpdateGroupRequestBodyInsightsConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InsightsEnabled")
    public Boolean insightsEnabled;
    public UpdateGroupRequestBodyInsightsConfiguration withInsightsEnabled(Boolean insightsEnabled) {
        this.insightsEnabled = insightsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotificationsEnabled")
    public Boolean notificationsEnabled;
    public UpdateGroupRequestBodyInsightsConfiguration withNotificationsEnabled(Boolean notificationsEnabled) {
        this.notificationsEnabled = notificationsEnabled;
        return this;
    }
}