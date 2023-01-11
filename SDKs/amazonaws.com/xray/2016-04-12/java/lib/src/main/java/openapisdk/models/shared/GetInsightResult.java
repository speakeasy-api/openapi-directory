package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInsightResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Insight")
    public Insight insight;
    public GetInsightResult withInsight(Insight insight) {
        this.insight = insight;
        return this;
    }
}