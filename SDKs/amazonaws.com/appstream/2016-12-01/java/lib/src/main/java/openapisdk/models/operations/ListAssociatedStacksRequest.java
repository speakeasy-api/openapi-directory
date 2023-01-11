package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssociatedStacksRequest {
    public ListAssociatedStacksHeaders headers;
    public ListAssociatedStacksRequest withHeaders(ListAssociatedStacksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAssociatedStacksRequest request;
    public ListAssociatedStacksRequest withRequest(openapisdk.models.shared.ListAssociatedStacksRequest request) {
        this.request = request;
        return this;
    }
}