package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInstanceAccessRequest {
    public GetInstanceAccessHeaders headers;
    public GetInstanceAccessRequest withHeaders(GetInstanceAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetInstanceAccessInput request;
    public GetInstanceAccessRequest withRequest(openapisdk.models.shared.GetInstanceAccessInput request) {
        this.request = request;
        return this;
    }
}