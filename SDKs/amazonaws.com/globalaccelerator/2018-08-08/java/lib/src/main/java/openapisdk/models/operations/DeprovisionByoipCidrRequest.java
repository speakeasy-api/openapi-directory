package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeprovisionByoipCidrRequest {
    public DeprovisionByoipCidrHeaders headers;
    public DeprovisionByoipCidrRequest withHeaders(DeprovisionByoipCidrHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeprovisionByoipCidrRequest request;
    public DeprovisionByoipCidrRequest withRequest(openapisdk.models.shared.DeprovisionByoipCidrRequest request) {
        this.request = request;
        return this;
    }
}