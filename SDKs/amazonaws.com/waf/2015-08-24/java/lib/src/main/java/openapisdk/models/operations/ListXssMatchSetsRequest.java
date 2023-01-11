package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListXssMatchSetsRequest {
    public ListXssMatchSetsHeaders headers;
    public ListXssMatchSetsRequest withHeaders(ListXssMatchSetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListXssMatchSetsRequest request;
    public ListXssMatchSetsRequest withRequest(openapisdk.models.shared.ListXssMatchSetsRequest request) {
        this.request = request;
        return this;
    }
}