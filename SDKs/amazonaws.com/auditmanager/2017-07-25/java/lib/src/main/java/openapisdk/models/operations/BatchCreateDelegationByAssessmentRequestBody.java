package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchCreateDelegationByAssessmentRequestBody {
    @JsonProperty("createDelegationRequests")
    public openapisdk.models.shared.CreateDelegationRequest[] createDelegationRequests;
    public BatchCreateDelegationByAssessmentRequestBody withCreateDelegationRequests(openapisdk.models.shared.CreateDelegationRequest[] createDelegationRequests) {
        this.createDelegationRequests = createDelegationRequests;
        return this;
    }
}