package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutEvaluationsResponse
 * <p/>
**/
public class PutEvaluationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedEvaluations")
    public Evaluation[] failedEvaluations;
    public PutEvaluationsResponse withFailedEvaluations(Evaluation[] failedEvaluations) {
        this.failedEvaluations = failedEvaluations;
        return this;
    }
}