package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutRemediationExceptionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedBatches")
    public FailedRemediationExceptionBatch[] failedBatches;
    public PutRemediationExceptionsResponse withFailedBatches(FailedRemediationExceptionBatch[] failedBatches) {
        this.failedBatches = failedBatches;
        return this;
    }
}