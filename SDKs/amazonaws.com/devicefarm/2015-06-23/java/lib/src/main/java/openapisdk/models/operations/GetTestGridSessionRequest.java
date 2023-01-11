package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTestGridSessionRequest {
    public GetTestGridSessionHeaders headers;
    public GetTestGridSessionRequest withHeaders(GetTestGridSessionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetTestGridSessionRequest request;
    public GetTestGridSessionRequest withRequest(openapisdk.models.shared.GetTestGridSessionRequest request) {
        this.request = request;
        return this;
    }
}