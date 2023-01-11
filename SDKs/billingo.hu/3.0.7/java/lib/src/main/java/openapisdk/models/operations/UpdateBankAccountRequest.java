package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBankAccountRequest {
    public UpdateBankAccountPathParams pathParams;
    public UpdateBankAccountRequest withPathParams(UpdateBankAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BankAccountInput request;
    public UpdateBankAccountRequest withRequest(openapisdk.models.shared.BankAccountInput request) {
        this.request = request;
        return this;
    }
}