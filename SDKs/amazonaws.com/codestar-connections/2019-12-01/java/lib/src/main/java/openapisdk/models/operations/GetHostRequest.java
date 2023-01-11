package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHostRequest {
    public GetHostHeaders headers;
    public GetHostRequest withHeaders(GetHostHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetHostInput request;
    public GetHostRequest withRequest(openapisdk.models.shared.GetHostInput request) {
        this.request = request;
        return this;
    }
}