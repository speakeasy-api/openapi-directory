package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutProvisionedConcurrencyConfigRequestBody {
    @JsonProperty("ProvisionedConcurrentExecutions")
    public Long provisionedConcurrentExecutions;
    public PutProvisionedConcurrencyConfigRequestBody withProvisionedConcurrentExecutions(Long provisionedConcurrentExecutions) {
        this.provisionedConcurrentExecutions = provisionedConcurrentExecutions;
        return this;
    }
}