package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchDeleteDelegationByAssessmentRequestBody {
    @JsonProperty("delegationIds")
    public String[] delegationIds;
    public BatchDeleteDelegationByAssessmentRequestBody withDelegationIds(String[] delegationIds) {
        this.delegationIds = delegationIds;
        return this;
    }
}