package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMlTransformRequest {
    public GetMlTransformHeaders headers;
    public GetMlTransformRequest withHeaders(GetMlTransformHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetMlTransformRequest request;
    public GetMlTransformRequest withRequest(openapisdk.models.shared.GetMlTransformRequest request) {
        this.request = request;
        return this;
    }
}