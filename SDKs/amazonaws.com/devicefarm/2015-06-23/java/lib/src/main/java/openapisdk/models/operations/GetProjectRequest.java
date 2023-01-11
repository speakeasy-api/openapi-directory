package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectRequest {
    public GetProjectHeaders headers;
    public GetProjectRequest withHeaders(GetProjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetProjectRequest request;
    public GetProjectRequest withRequest(openapisdk.models.shared.GetProjectRequest request) {
        this.request = request;
        return this;
    }
}