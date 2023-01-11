package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListByteMatchSetsRequest {
    public ListByteMatchSetsHeaders headers;
    public ListByteMatchSetsRequest withHeaders(ListByteMatchSetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListByteMatchSetsRequest request;
    public ListByteMatchSetsRequest withRequest(openapisdk.models.shared.ListByteMatchSetsRequest request) {
        this.request = request;
        return this;
    }
}