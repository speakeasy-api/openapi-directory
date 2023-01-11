package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutExternalEvaluationRequest {
    @JsonProperty("ConfigRuleName")
    public String configRuleName;
    public PutExternalEvaluationRequest withConfigRuleName(String configRuleName) {
        this.configRuleName = configRuleName;
        return this;
    }
    @JsonProperty("ExternalEvaluation")
    public ExternalEvaluation externalEvaluation;
    public PutExternalEvaluationRequest withExternalEvaluation(ExternalEvaluation externalEvaluation) {
        this.externalEvaluation = externalEvaluation;
        return this;
    }
}