package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBatchPaymentNewBatchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchUuid")
    public String batchUuid;
    public CreateBatchPaymentNewBatchResponse withBatchUuid(String batchUuid) {
        this.batchUuid = batchUuid;
        return this;
    }
}