package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateGroupRequestBodyInsightsConfiguration
 * The structure containing configurations related to insights.
**/
public class CreateGroupRequestBodyInsightsConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InsightsEnabled")
    public Boolean insightsEnabled;
    public CreateGroupRequestBodyInsightsConfiguration withInsightsEnabled(Boolean insightsEnabled) {
        this.insightsEnabled = insightsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotificationsEnabled")
    public Boolean notificationsEnabled;
    public CreateGroupRequestBodyInsightsConfiguration withNotificationsEnabled(Boolean notificationsEnabled) {
        this.notificationsEnabled = notificationsEnabled;
        return this;
    }
}