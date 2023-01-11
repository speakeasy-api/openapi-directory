package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFleetsRequest {
    public ListFleetsQueryParams queryParams;
    public ListFleetsRequest withQueryParams(ListFleetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFleetsHeaders headers;
    public ListFleetsRequest withHeaders(ListFleetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListFleetsInput request;
    public ListFleetsRequest withRequest(openapisdk.models.shared.ListFleetsInput request) {
        this.request = request;
        return this;
    }
}