package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSourceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SourceIdRequestBody request;
    public DeleteSourceRequest withRequest(openapisdk.models.shared.SourceIdRequestBody request) {
        this.request = request;
        return this;
    }
}