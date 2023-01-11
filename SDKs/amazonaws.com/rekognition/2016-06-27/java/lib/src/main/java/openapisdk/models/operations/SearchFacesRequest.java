package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchFacesRequest {
    public SearchFacesHeaders headers;
    public SearchFacesRequest withHeaders(SearchFacesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchFacesRequest request;
    public SearchFacesRequest withRequest(openapisdk.models.shared.SearchFacesRequest request) {
        this.request = request;
        return this;
    }
}