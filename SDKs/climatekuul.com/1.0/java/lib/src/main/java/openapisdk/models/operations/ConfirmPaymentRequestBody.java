package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmPaymentRequestBody {
    @SpeakeasyMetadata("form:name=apiKey_l1")
    public String apiKeyL1;
    public ConfirmPaymentRequestBody withApiKeyL1(String apiKeyL1) {
        this.apiKeyL1 = apiKeyL1;
        return this;
    }
    @SpeakeasyMetadata("form:name=apiKey_l2")
    public String apiKeyL2;
    public ConfirmPaymentRequestBody withApiKeyL2(String apiKeyL2) {
        this.apiKeyL2 = apiKeyL2;
        return this;
    }
    @SpeakeasyMetadata("form:name=confirmPayment")
    public String confirmPayment;
    public ConfirmPaymentRequestBody withConfirmPayment(String confirmPayment) {
        this.confirmPayment = confirmPayment;
        return this;
    }
    @SpeakeasyMetadata("form:name=paymentID")
    public Integer paymentID;
    public ConfirmPaymentRequestBody withPaymentId(Integer paymentID) {
        this.paymentID = paymentID;
        return this;
    }
    @SpeakeasyMetadata("form:name=transaction_id")
    public String transactionId;
    public ConfirmPaymentRequestBody withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}