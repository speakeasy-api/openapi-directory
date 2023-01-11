package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WithdrawByoipCidrRequest {
    public WithdrawByoipCidrHeaders headers;
    public WithdrawByoipCidrRequest withHeaders(WithdrawByoipCidrHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WithdrawByoipCidrRequest request;
    public WithdrawByoipCidrRequest withRequest(openapisdk.models.shared.WithdrawByoipCidrRequest request) {
        this.request = request;
        return this;
    }
}