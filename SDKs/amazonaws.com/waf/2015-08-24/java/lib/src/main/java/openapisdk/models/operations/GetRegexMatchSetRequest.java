package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRegexMatchSetRequest {
    public GetRegexMatchSetHeaders headers;
    public GetRegexMatchSetRequest withHeaders(GetRegexMatchSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRegexMatchSetRequest request;
    public GetRegexMatchSetRequest withRequest(openapisdk.models.shared.GetRegexMatchSetRequest request) {
        this.request = request;
        return this;
    }
}