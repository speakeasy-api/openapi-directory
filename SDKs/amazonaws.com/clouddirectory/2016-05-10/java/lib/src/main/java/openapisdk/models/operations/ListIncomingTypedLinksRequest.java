package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIncomingTypedLinksRequest {
    public ListIncomingTypedLinksHeaders headers;
    public ListIncomingTypedLinksRequest withHeaders(ListIncomingTypedLinksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListIncomingTypedLinksRequestBody request;
    public ListIncomingTypedLinksRequest withRequest(ListIncomingTypedLinksRequestBody request) {
        this.request = request;
        return this;
    }
}