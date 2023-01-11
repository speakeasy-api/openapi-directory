package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDistributionBundleResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation")
    public Operation operation;
    public UpdateDistributionBundleResult withOperation(Operation operation) {
        this.operation = operation;
        return this;
    }
}