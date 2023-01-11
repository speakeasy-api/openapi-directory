package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLogPatternRequest {
    public DeleteLogPatternHeaders headers;
    public DeleteLogPatternRequest withHeaders(DeleteLogPatternHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteLogPatternRequest request;
    public DeleteLogPatternRequest withRequest(openapisdk.models.shared.DeleteLogPatternRequest request) {
        this.request = request;
        return this;
    }
}