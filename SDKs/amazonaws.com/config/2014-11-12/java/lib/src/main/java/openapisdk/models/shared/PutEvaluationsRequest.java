package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutEvaluationsRequest
 * <p/>
**/
public class PutEvaluationsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Evaluations")
    public Evaluation[] evaluations;
    public PutEvaluationsRequest withEvaluations(Evaluation[] evaluations) {
        this.evaluations = evaluations;
        return this;
    }
    @JsonProperty("ResultToken")
    public String resultToken;
    public PutEvaluationsRequest withResultToken(String resultToken) {
        this.resultToken = resultToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TestMode")
    public Boolean testMode;
    public PutEvaluationsRequest withTestMode(Boolean testMode) {
        this.testMode = testMode;
        return this;
    }
}