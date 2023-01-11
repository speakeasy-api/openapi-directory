package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetInsightRequestBody {
    @JsonProperty("InsightId")
    public String insightId;
    public GetInsightRequestBody withInsightId(String insightId) {
        this.insightId = insightId;
        return this;
    }
}