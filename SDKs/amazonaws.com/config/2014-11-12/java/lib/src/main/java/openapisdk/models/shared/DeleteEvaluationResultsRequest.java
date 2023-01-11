package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteEvaluationResultsRequest
 * <p/>
**/
public class DeleteEvaluationResultsRequest {
    @JsonProperty("ConfigRuleName")
    public String configRuleName;
    public DeleteEvaluationResultsRequest withConfigRuleName(String configRuleName) {
        this.configRuleName = configRuleName;
        return this;
    }
}