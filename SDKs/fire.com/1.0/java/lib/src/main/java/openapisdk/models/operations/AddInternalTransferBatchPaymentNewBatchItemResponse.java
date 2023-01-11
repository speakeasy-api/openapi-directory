package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddInternalTransferBatchPaymentNewBatchItemResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchItemUuid")
    public String batchItemUuid;
    public AddInternalTransferBatchPaymentNewBatchItemResponse withBatchItemUuid(String batchItemUuid) {
        this.batchItemUuid = batchItemUuid;
        return this;
    }
}