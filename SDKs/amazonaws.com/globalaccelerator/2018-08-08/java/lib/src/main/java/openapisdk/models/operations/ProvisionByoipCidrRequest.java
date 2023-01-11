package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProvisionByoipCidrRequest {
    public ProvisionByoipCidrHeaders headers;
    public ProvisionByoipCidrRequest withHeaders(ProvisionByoipCidrHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProvisionByoipCidrRequest request;
    public ProvisionByoipCidrRequest withRequest(openapisdk.models.shared.ProvisionByoipCidrRequest request) {
        this.request = request;
        return this;
    }
}