package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Long amount;
    public AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2 withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destAccountHolderName")
    public String destAccountHolderName;
    public AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2 withDestAccountHolderName(String destAccountHolderName) {
        this.destAccountHolderName = destAccountHolderName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destAccountNumber")
    public String destAccountNumber;
    public AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2 withDestAccountNumber(String destAccountNumber) {
        this.destAccountNumber = destAccountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destIban")
    public String destIban;
    public AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2 withDestIban(String destIban) {
        this.destIban = destIban;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destNsc")
    public String destNsc;
    public AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2 withDestNsc(String destNsc) {
        this.destNsc = destNsc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icanFrom")
    public Long icanFrom;
    public AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2 withIcanFrom(Long icanFrom) {
        this.icanFrom = icanFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("myRef")
    public String myRef;
    public AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2 withMyRef(String myRef) {
        this.myRef = myRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payeeType")
    public AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnum payeeType;
    public AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2 withPayeeType(AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnum payeeType) {
        this.payeeType = payeeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yourRef")
    public String yourRef;
    public AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2 withYourRef(String yourRef) {
        this.yourRef = yourRef;
        return this;
    }
}