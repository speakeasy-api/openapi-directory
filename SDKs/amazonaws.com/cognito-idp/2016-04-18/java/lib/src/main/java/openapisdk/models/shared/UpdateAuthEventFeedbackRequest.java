package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateAuthEventFeedbackRequest {
    @JsonProperty("EventId")
    public String eventId;
    public UpdateAuthEventFeedbackRequest withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonProperty("FeedbackToken")
    public String feedbackToken;
    public UpdateAuthEventFeedbackRequest withFeedbackToken(String feedbackToken) {
        this.feedbackToken = feedbackToken;
        return this;
    }
    @JsonProperty("FeedbackValue")
    public FeedbackValueTypeEnum feedbackValue;
    public UpdateAuthEventFeedbackRequest withFeedbackValue(FeedbackValueTypeEnum feedbackValue) {
        this.feedbackValue = feedbackValue;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public UpdateAuthEventFeedbackRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public UpdateAuthEventFeedbackRequest withUsername(String username) {
        this.username = username;
        return this;
    }
}