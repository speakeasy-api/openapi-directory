package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteClassifierRequest {
    public DeleteClassifierHeaders headers;
    public DeleteClassifierRequest withHeaders(DeleteClassifierHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteClassifierRequest request;
    public DeleteClassifierRequest withRequest(openapisdk.models.shared.DeleteClassifierRequest request) {
        this.request = request;
        return this;
    }
}