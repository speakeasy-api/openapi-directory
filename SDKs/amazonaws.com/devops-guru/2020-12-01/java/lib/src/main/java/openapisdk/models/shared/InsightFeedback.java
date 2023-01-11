package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InsightFeedback
 *  Information about insight feedback received from a customer. 
**/
public class InsightFeedback {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Feedback")
    public InsightFeedbackOptionEnum feedback;
    public InsightFeedback withFeedback(InsightFeedbackOptionEnum feedback) {
        this.feedback = feedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public InsightFeedback withId(String id) {
        this.id = id;
        return this;
    }
}