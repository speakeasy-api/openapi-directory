package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserFeedback
 * Feedback that can be submitted for each instance of an anomaly by the user. Feedback is be used for improvements in generating recommendations for the application.
**/
public class UserFeedback {
    @JsonProperty("type")
    public FeedbackTypeEnum type;
    public UserFeedback withType(FeedbackTypeEnum type) {
        this.type = type;
        return this;
    }
}