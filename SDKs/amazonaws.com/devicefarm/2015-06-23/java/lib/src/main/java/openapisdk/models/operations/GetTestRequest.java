package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTestRequest {
    public GetTestHeaders headers;
    public GetTestRequest withHeaders(GetTestHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetTestRequest request;
    public GetTestRequest withRequest(openapisdk.models.shared.GetTestRequest request) {
        this.request = request;
        return this;
    }
}