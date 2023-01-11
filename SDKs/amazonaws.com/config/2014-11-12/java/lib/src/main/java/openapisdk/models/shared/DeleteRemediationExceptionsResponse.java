package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteRemediationExceptionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedBatches")
    public FailedDeleteRemediationExceptionsBatch[] failedBatches;
    public DeleteRemediationExceptionsResponse withFailedBatches(FailedDeleteRemediationExceptionsBatch[] failedBatches) {
        this.failedBatches = failedBatches;
        return this;
    }
}