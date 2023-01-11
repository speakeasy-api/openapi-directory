package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeFeedbackRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InsightId")
    public String insightId;
    public DescribeFeedbackRequestBody withInsightId(String insightId) {
        this.insightId = insightId;
        return this;
    }
}