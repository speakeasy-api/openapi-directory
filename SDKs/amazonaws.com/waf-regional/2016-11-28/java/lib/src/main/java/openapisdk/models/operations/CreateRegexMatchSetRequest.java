package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRegexMatchSetRequest {
    public CreateRegexMatchSetHeaders headers;
    public CreateRegexMatchSetRequest withHeaders(CreateRegexMatchSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateRegexMatchSetRequest request;
    public CreateRegexMatchSetRequest withRequest(openapisdk.models.shared.CreateRegexMatchSetRequest request) {
        this.request = request;
        return this;
    }
}