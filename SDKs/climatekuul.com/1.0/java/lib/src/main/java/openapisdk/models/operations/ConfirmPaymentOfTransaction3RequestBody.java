package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmPaymentOfTransaction3RequestBody {
    @SpeakeasyMetadata("form:name=confirmTransaction")
    public String confirmTransaction;
    public ConfirmPaymentOfTransaction3RequestBody withConfirmTransaction(String confirmTransaction) {
        this.confirmTransaction = confirmTransaction;
        return this;
    }
    @SpeakeasyMetadata("form:name=transaction_id")
    public String transactionId;
    public ConfirmPaymentOfTransaction3RequestBody withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}