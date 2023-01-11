package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddInternalTransferBatchPaymentBatchItemInternalTransfer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Long amount;
    public AddInternalTransferBatchPaymentBatchItemInternalTransfer withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icanFrom")
    public Long icanFrom;
    public AddInternalTransferBatchPaymentBatchItemInternalTransfer withIcanFrom(Long icanFrom) {
        this.icanFrom = icanFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icanTo")
    public Long icanTo;
    public AddInternalTransferBatchPaymentBatchItemInternalTransfer withIcanTo(Long icanTo) {
        this.icanTo = icanTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ref")
    public String ref;
    public AddInternalTransferBatchPaymentBatchItemInternalTransfer withRef(String ref) {
        this.ref = ref;
        return this;
    }
}