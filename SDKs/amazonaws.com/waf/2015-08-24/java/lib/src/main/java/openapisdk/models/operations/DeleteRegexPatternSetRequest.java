package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRegexPatternSetRequest {
    public DeleteRegexPatternSetHeaders headers;
    public DeleteRegexPatternSetRequest withHeaders(DeleteRegexPatternSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteRegexPatternSetRequest request;
    public DeleteRegexPatternSetRequest withRequest(openapisdk.models.shared.DeleteRegexPatternSetRequest request) {
        this.request = request;
        return this;
    }
}