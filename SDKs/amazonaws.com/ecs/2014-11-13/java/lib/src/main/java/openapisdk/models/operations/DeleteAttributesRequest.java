package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAttributesRequest {
    public DeleteAttributesHeaders headers;
    public DeleteAttributesRequest withHeaders(DeleteAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAttributesRequest request;
    public DeleteAttributesRequest withRequest(openapisdk.models.shared.DeleteAttributesRequest request) {
        this.request = request;
        return this;
    }
}