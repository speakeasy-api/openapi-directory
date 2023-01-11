package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AdminUpdateAuthEventFeedbackRequest {
    @JsonProperty("EventId")
    public String eventId;
    public AdminUpdateAuthEventFeedbackRequest withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonProperty("FeedbackValue")
    public FeedbackValueTypeEnum feedbackValue;
    public AdminUpdateAuthEventFeedbackRequest withFeedbackValue(FeedbackValueTypeEnum feedbackValue) {
        this.feedbackValue = feedbackValue;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public AdminUpdateAuthEventFeedbackRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public AdminUpdateAuthEventFeedbackRequest withUsername(String username) {
        this.username = username;
        return this;
    }
}