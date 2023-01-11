package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLogPatternRequest {
    public CreateLogPatternHeaders headers;
    public CreateLogPatternRequest withHeaders(CreateLogPatternHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLogPatternRequest request;
    public CreateLogPatternRequest withRequest(openapisdk.models.shared.CreateLogPatternRequest request) {
        this.request = request;
        return this;
    }
}