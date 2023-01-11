package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Long amount;
    public AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1 withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icanFrom")
    public Long icanFrom;
    public AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1 withIcanFrom(Long icanFrom) {
        this.icanFrom = icanFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("myRef")
    public String myRef;
    public AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1 withMyRef(String myRef) {
        this.myRef = myRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payeeId")
    public Long payeeId;
    public AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1 withPayeeId(Long payeeId) {
        this.payeeId = payeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payeeType")
    public AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum payeeType;
    public AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1 withPayeeType(AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum payeeType) {
        this.payeeType = payeeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yourRef")
    public String yourRef;
    public AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1 withYourRef(String yourRef) {
        this.yourRef = yourRef;
        return this;
    }
}