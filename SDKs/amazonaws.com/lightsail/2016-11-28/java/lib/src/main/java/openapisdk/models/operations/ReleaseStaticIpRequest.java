package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReleaseStaticIpRequest {
    public ReleaseStaticIpHeaders headers;
    public ReleaseStaticIpRequest withHeaders(ReleaseStaticIpHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReleaseStaticIpRequest request;
    public ReleaseStaticIpRequest withRequest(openapisdk.models.shared.ReleaseStaticIpRequest request) {
        this.request = request;
        return this;
    }
}