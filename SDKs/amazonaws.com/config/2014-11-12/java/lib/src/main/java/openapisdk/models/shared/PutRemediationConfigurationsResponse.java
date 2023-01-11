package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutRemediationConfigurationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedBatches")
    public FailedRemediationBatch[] failedBatches;
    public PutRemediationConfigurationsResponse withFailedBatches(FailedRemediationBatch[] failedBatches) {
        this.failedBatches = failedBatches;
        return this;
    }
}