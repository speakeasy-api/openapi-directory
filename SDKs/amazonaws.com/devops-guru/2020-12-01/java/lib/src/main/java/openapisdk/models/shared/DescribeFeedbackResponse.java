package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeFeedbackResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InsightFeedback")
    public InsightFeedback insightFeedback;
    public DescribeFeedbackResponse withInsightFeedback(InsightFeedback insightFeedback) {
        this.insightFeedback = insightFeedback;
        return this;
    }
}