package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRegexPatternSetRequest {
    public CreateRegexPatternSetHeaders headers;
    public CreateRegexPatternSetRequest withHeaders(CreateRegexPatternSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateRegexPatternSetRequest request;
    public CreateRegexPatternSetRequest withRequest(openapisdk.models.shared.CreateRegexPatternSetRequest request) {
        this.request = request;
        return this;
    }
}