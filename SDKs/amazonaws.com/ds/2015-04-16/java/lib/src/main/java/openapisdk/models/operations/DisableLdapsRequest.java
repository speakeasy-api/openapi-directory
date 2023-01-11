package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableLdapsRequest {
    public DisableLdapsHeaders headers;
    public DisableLdapsRequest withHeaders(DisableLdapsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisableLdapsRequest request;
    public DisableLdapsRequest withRequest(openapisdk.models.shared.DisableLdapsRequest request) {
        this.request = request;
        return this;
    }
}