package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmPaymentOfTransaction1RequestBody {
    @SpeakeasyMetadata("form:name=confirmTransaction")
    public String confirmTransaction;
    public ConfirmPaymentOfTransaction1RequestBody withConfirmTransaction(String confirmTransaction) {
        this.confirmTransaction = confirmTransaction;
        return this;
    }
    @SpeakeasyMetadata("form:name=transaction_id")
    public String transactionId;
    public ConfirmPaymentOfTransaction1RequestBody withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}