package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRegexPatternSetRequest {
    public GetRegexPatternSetHeaders headers;
    public GetRegexPatternSetRequest withHeaders(GetRegexPatternSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRegexPatternSetRequest request;
    public GetRegexPatternSetRequest withRequest(openapisdk.models.shared.GetRegexPatternSetRequest request) {
        this.request = request;
        return this;
    }
}