package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConformancePackRequest {
    public DeleteConformancePackHeaders headers;
    public DeleteConformancePackRequest withHeaders(DeleteConformancePackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteConformancePackRequest request;
    public DeleteConformancePackRequest withRequest(openapisdk.models.shared.DeleteConformancePackRequest request) {
        this.request = request;
        return this;
    }
}