package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInstanceAccessDetailsRequest {
    public GetInstanceAccessDetailsHeaders headers;
    public GetInstanceAccessDetailsRequest withHeaders(GetInstanceAccessDetailsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetInstanceAccessDetailsRequest request;
    public GetInstanceAccessDetailsRequest withRequest(openapisdk.models.shared.GetInstanceAccessDetailsRequest request) {
        this.request = request;
        return this;
    }
}