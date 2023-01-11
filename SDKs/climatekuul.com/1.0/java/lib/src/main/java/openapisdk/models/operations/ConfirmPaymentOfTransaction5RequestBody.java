package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmPaymentOfTransaction5RequestBody {
    @SpeakeasyMetadata("form:name=confirmTransaction")
    public String confirmTransaction;
    public ConfirmPaymentOfTransaction5RequestBody withConfirmTransaction(String confirmTransaction) {
        this.confirmTransaction = confirmTransaction;
        return this;
    }
    @SpeakeasyMetadata("form:name=transaction_id")
    public String transactionId;
    public ConfirmPaymentOfTransaction5RequestBody withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}