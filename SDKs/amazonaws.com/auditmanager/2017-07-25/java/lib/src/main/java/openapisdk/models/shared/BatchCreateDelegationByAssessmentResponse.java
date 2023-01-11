package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchCreateDelegationByAssessmentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delegations")
    public Delegation[] delegations;
    public BatchCreateDelegationByAssessmentResponse withDelegations(Delegation[] delegations) {
        this.delegations = delegations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public BatchCreateDelegationByAssessmentError[] errors;
    public BatchCreateDelegationByAssessmentResponse withErrors(BatchCreateDelegationByAssessmentError[] errors) {
        this.errors = errors;
        return this;
    }
}