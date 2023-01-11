package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateExclusionsPreviewRequest {
    public CreateExclusionsPreviewHeaders headers;
    public CreateExclusionsPreviewRequest withHeaders(CreateExclusionsPreviewHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateExclusionsPreviewRequest request;
    public CreateExclusionsPreviewRequest withRequest(openapisdk.models.shared.CreateExclusionsPreviewRequest request) {
        this.request = request;
        return this;
    }
}