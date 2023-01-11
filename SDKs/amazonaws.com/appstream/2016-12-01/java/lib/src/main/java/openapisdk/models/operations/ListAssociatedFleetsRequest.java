package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssociatedFleetsRequest {
    public ListAssociatedFleetsHeaders headers;
    public ListAssociatedFleetsRequest withHeaders(ListAssociatedFleetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAssociatedFleetsRequest request;
    public ListAssociatedFleetsRequest withRequest(openapisdk.models.shared.ListAssociatedFleetsRequest request) {
        this.request = request;
        return this;
    }
}