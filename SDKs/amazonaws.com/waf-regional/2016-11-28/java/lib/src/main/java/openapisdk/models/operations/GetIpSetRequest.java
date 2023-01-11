package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIpSetRequest {
    public GetIpSetHeaders headers;
    public GetIpSetRequest withHeaders(GetIpSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetIpSetRequest request;
    public GetIpSetRequest withRequest(openapisdk.models.shared.GetIpSetRequest request) {
        this.request = request;
        return this;
    }
}