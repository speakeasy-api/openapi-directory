package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteInsightResponse {
    @JsonProperty("InsightArn")
    public String insightArn;
    public DeleteInsightResponse withInsightArn(String insightArn) {
        this.insightArn = insightArn;
        return this;
    }
}