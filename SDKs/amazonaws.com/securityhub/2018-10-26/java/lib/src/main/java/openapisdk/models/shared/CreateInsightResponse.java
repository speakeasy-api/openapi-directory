package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateInsightResponse {
    @JsonProperty("InsightArn")
    public String insightArn;
    public CreateInsightResponse withInsightArn(String insightArn) {
        this.insightArn = insightArn;
        return this;
    }
}