package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListOutgoingTypedLinksRequest {
    public ListOutgoingTypedLinksHeaders headers;
    public ListOutgoingTypedLinksRequest withHeaders(ListOutgoingTypedLinksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListOutgoingTypedLinksRequestBody request;
    public ListOutgoingTypedLinksRequest withRequest(ListOutgoingTypedLinksRequestBody request) {
        this.request = request;
        return this;
    }
}