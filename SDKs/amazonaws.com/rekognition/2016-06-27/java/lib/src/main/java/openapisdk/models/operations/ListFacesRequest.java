package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFacesRequest {
    public ListFacesQueryParams queryParams;
    public ListFacesRequest withQueryParams(ListFacesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFacesHeaders headers;
    public ListFacesRequest withHeaders(ListFacesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListFacesRequest request;
    public ListFacesRequest withRequest(openapisdk.models.shared.ListFacesRequest request) {
        this.request = request;
        return this;
    }
}