package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmPayment1RequestBody {
    @SpeakeasyMetadata("form:name=apiKey_l1")
    public String apiKeyL1;
    public ConfirmPayment1RequestBody withApiKeyL1(String apiKeyL1) {
        this.apiKeyL1 = apiKeyL1;
        return this;
    }
    @SpeakeasyMetadata("form:name=apiKey_l2")
    public String apiKeyL2;
    public ConfirmPayment1RequestBody withApiKeyL2(String apiKeyL2) {
        this.apiKeyL2 = apiKeyL2;
        return this;
    }
    @SpeakeasyMetadata("form:name=confirmPayment")
    public String confirmPayment;
    public ConfirmPayment1RequestBody withConfirmPayment(String confirmPayment) {
        this.confirmPayment = confirmPayment;
        return this;
    }
    @SpeakeasyMetadata("form:name=paymentID")
    public Integer paymentID;
    public ConfirmPayment1RequestBody withPaymentId(Integer paymentID) {
        this.paymentID = paymentID;
        return this;
    }
    @SpeakeasyMetadata("form:name=transaction_id")
    public String transactionId;
    public ConfirmPayment1RequestBody withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}