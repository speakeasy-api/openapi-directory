package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutFeedbackRequestBodyInsightFeedback
 *  Information about insight feedback received from a customer. 
**/
public class PutFeedbackRequestBodyInsightFeedback {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Feedback")
    public openapisdk.models.shared.InsightFeedbackOptionEnum feedback;
    public PutFeedbackRequestBodyInsightFeedback withFeedback(openapisdk.models.shared.InsightFeedbackOptionEnum feedback) {
        this.feedback = feedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public PutFeedbackRequestBodyInsightFeedback withId(String id) {
        this.id = id;
        return this;
    }
}