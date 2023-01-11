package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNamedQueryRequest {
    public DeleteNamedQueryHeaders headers;
    public DeleteNamedQueryRequest withHeaders(DeleteNamedQueryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteNamedQueryInput request;
    public DeleteNamedQueryRequest withRequest(openapisdk.models.shared.DeleteNamedQueryInput request) {
        this.request = request;
        return this;
    }
}