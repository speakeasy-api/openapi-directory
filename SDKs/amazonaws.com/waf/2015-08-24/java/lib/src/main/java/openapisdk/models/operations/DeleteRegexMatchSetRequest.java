package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRegexMatchSetRequest {
    public DeleteRegexMatchSetHeaders headers;
    public DeleteRegexMatchSetRequest withHeaders(DeleteRegexMatchSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteRegexMatchSetRequest request;
    public DeleteRegexMatchSetRequest withRequest(openapisdk.models.shared.DeleteRegexMatchSetRequest request) {
        this.request = request;
        return this;
    }
}