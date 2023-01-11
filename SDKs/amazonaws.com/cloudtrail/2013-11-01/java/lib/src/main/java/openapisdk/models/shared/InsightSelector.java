package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InsightSelector
 * A JSON string that contains a list of insight types that are logged on a trail.
**/
public class InsightSelector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InsightType")
    public InsightTypeEnum insightType;
    public InsightSelector withInsightType(InsightTypeEnum insightType) {
        this.insightType = insightType;
        return this;
    }
}