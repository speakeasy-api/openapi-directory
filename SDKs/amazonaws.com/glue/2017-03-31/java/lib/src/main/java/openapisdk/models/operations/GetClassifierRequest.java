package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetClassifierRequest {
    public GetClassifierHeaders headers;
    public GetClassifierRequest withHeaders(GetClassifierHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetClassifierRequest request;
    public GetClassifierRequest withRequest(openapisdk.models.shared.GetClassifierRequest request) {
        this.request = request;
        return this;
    }
}