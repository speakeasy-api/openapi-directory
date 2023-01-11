package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRegexMatchSetRequest {
    public UpdateRegexMatchSetHeaders headers;
    public UpdateRegexMatchSetRequest withHeaders(UpdateRegexMatchSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateRegexMatchSetRequest request;
    public UpdateRegexMatchSetRequest withRequest(openapisdk.models.shared.UpdateRegexMatchSetRequest request) {
        this.request = request;
        return this;
    }
}