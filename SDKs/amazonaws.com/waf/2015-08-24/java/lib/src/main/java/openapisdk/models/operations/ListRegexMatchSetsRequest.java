package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRegexMatchSetsRequest {
    public ListRegexMatchSetsHeaders headers;
    public ListRegexMatchSetsRequest withHeaders(ListRegexMatchSetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListRegexMatchSetsRequest request;
    public ListRegexMatchSetsRequest withRequest(openapisdk.models.shared.ListRegexMatchSetsRequest request) {
        this.request = request;
        return this;
    }
}