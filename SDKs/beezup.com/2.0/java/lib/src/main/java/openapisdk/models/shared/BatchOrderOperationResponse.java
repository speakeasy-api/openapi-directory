package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchOrderOperationResponse
 * The response given by the batch operation
**/
public class BatchOrderOperationResponse {
    @JsonProperty("operations")
    public OrderOperationResponse[] operations;
    public BatchOrderOperationResponse withOperations(OrderOperationResponse[] operations) {
        this.operations = operations;
        return this;
    }
}