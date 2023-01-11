package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchPlaceIndexForPositionRequest {
    public SearchPlaceIndexForPositionPathParams pathParams;
    public SearchPlaceIndexForPositionRequest withPathParams(SearchPlaceIndexForPositionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SearchPlaceIndexForPositionHeaders headers;
    public SearchPlaceIndexForPositionRequest withHeaders(SearchPlaceIndexForPositionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SearchPlaceIndexForPositionRequestBody request;
    public SearchPlaceIndexForPositionRequest withRequest(SearchPlaceIndexForPositionRequestBody request) {
        this.request = request;
        return this;
    }
}