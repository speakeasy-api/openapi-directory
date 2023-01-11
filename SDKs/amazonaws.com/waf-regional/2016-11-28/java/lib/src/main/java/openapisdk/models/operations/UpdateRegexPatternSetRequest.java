package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRegexPatternSetRequest {
    public UpdateRegexPatternSetHeaders headers;
    public UpdateRegexPatternSetRequest withHeaders(UpdateRegexPatternSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateRegexPatternSetRequest request;
    public UpdateRegexPatternSetRequest withRequest(openapisdk.models.shared.UpdateRegexPatternSetRequest request) {
        this.request = request;
        return this;
    }
}