package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRegexPatternSetsRequest {
    public ListRegexPatternSetsHeaders headers;
    public ListRegexPatternSetsRequest withHeaders(ListRegexPatternSetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListRegexPatternSetsRequest request;
    public ListRegexPatternSetsRequest withRequest(openapisdk.models.shared.ListRegexPatternSetsRequest request) {
        this.request = request;
        return this;
    }
}