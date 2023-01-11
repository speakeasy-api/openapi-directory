package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBankAccountRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BankAccountInput request;
    public CreateBankAccountRequest withRequest(openapisdk.models.shared.BankAccountInput request) {
        this.request = request;
        return this;
    }
}