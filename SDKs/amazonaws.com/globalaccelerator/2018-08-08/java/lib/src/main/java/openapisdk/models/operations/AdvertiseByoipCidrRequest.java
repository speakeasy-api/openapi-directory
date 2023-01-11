package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdvertiseByoipCidrRequest {
    public AdvertiseByoipCidrHeaders headers;
    public AdvertiseByoipCidrRequest withHeaders(AdvertiseByoipCidrHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdvertiseByoipCidrRequest request;
    public AdvertiseByoipCidrRequest withRequest(openapisdk.models.shared.AdvertiseByoipCidrRequest request) {
        this.request = request;
        return this;
    }
}