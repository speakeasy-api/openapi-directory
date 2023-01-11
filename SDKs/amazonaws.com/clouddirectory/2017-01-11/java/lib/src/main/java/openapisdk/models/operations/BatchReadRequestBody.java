package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchReadRequestBody {
    @JsonProperty("Operations")
    public openapisdk.models.shared.BatchReadOperation[] operations;
    public BatchReadRequestBody withOperations(openapisdk.models.shared.BatchReadOperation[] operations) {
        this.operations = operations;
        return this;
    }
}