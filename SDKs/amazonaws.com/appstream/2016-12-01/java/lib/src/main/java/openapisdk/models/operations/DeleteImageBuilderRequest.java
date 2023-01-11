package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteImageBuilderRequest {
    public DeleteImageBuilderHeaders headers;
    public DeleteImageBuilderRequest withHeaders(DeleteImageBuilderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteImageBuilderRequest request;
    public DeleteImageBuilderRequest withRequest(openapisdk.models.shared.DeleteImageBuilderRequest request) {
        this.request = request;
        return this;
    }
}