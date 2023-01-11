package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmPaymentOfTransactionRequestBody {
    @SpeakeasyMetadata("form:name=confirmTransaction")
    public String confirmTransaction;
    public ConfirmPaymentOfTransactionRequestBody withConfirmTransaction(String confirmTransaction) {
        this.confirmTransaction = confirmTransaction;
        return this;
    }
    @SpeakeasyMetadata("form:name=transaction_id")
    public String transactionId;
    public ConfirmPaymentOfTransactionRequestBody withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}