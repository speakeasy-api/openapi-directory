package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNamedQueryRequest {
    public CreateNamedQueryHeaders headers;
    public CreateNamedQueryRequest withHeaders(CreateNamedQueryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateNamedQueryInput request;
    public CreateNamedQueryRequest withRequest(openapisdk.models.shared.CreateNamedQueryInput request) {
        this.request = request;
        return this;
    }
}