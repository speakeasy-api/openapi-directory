package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutFeedbackRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InsightFeedback")
    public PutFeedbackRequestBodyInsightFeedback insightFeedback;
    public PutFeedbackRequestBody withInsightFeedback(PutFeedbackRequestBodyInsightFeedback insightFeedback) {
        this.insightFeedback = insightFeedback;
        return this;
    }
}