package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchPlaceIndexForTextRequest {
    public SearchPlaceIndexForTextPathParams pathParams;
    public SearchPlaceIndexForTextRequest withPathParams(SearchPlaceIndexForTextPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SearchPlaceIndexForTextHeaders headers;
    public SearchPlaceIndexForTextRequest withHeaders(SearchPlaceIndexForTextHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SearchPlaceIndexForTextRequestBody request;
    public SearchPlaceIndexForTextRequest withRequest(SearchPlaceIndexForTextRequestBody request) {
        this.request = request;
        return this;
    }
}