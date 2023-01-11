package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchWriteRequestBody {
    @JsonProperty("Operations")
    public openapisdk.models.shared.BatchWriteOperation[] operations;
    public BatchWriteRequestBody withOperations(openapisdk.models.shared.BatchWriteOperation[] operations) {
        this.operations = operations;
        return this;
    }
}