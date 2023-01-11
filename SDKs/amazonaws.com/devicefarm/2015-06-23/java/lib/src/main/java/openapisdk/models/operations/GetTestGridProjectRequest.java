package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTestGridProjectRequest {
    public GetTestGridProjectHeaders headers;
    public GetTestGridProjectRequest withHeaders(GetTestGridProjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetTestGridProjectRequest request;
    public GetTestGridProjectRequest withRequest(openapisdk.models.shared.GetTestGridProjectRequest request) {
        this.request = request;
        return this;
    }
}