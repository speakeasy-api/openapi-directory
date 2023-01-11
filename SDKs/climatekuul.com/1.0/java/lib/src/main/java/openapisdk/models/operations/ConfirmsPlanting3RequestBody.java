package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmsPlanting3RequestBody {
    @SpeakeasyMetadata("form:name=apiKey_l1")
    public String apiKeyL1;
    public ConfirmsPlanting3RequestBody withApiKeyL1(String apiKeyL1) {
        this.apiKeyL1 = apiKeyL1;
        return this;
    }
    @SpeakeasyMetadata("form:name=apiKey_l2")
    public String apiKeyL2;
    public ConfirmsPlanting3RequestBody withApiKeyL2(String apiKeyL2) {
        this.apiKeyL2 = apiKeyL2;
        return this;
    }
    @SpeakeasyMetadata("form:name=confirmPlanting")
    public String confirmPlanting;
    public ConfirmsPlanting3RequestBody withConfirmPlanting(String confirmPlanting) {
        this.confirmPlanting = confirmPlanting;
        return this;
    }
    @SpeakeasyMetadata("form:name=transaction_id")
    public String transactionId;
    public ConfirmsPlanting3RequestBody withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}