package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMlTransformRequest {
    public DeleteMlTransformHeaders headers;
    public DeleteMlTransformRequest withHeaders(DeleteMlTransformHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteMlTransformRequest request;
    public DeleteMlTransformRequest withRequest(openapisdk.models.shared.DeleteMlTransformRequest request) {
        this.request = request;
        return this;
    }
}