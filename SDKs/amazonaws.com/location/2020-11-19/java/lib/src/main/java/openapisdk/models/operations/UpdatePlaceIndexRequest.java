package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePlaceIndexRequest {
    public UpdatePlaceIndexPathParams pathParams;
    public UpdatePlaceIndexRequest withPathParams(UpdatePlaceIndexPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdatePlaceIndexHeaders headers;
    public UpdatePlaceIndexRequest withHeaders(UpdatePlaceIndexHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdatePlaceIndexRequestBody request;
    public UpdatePlaceIndexRequest withRequest(UpdatePlaceIndexRequestBody request) {
        this.request = request;
        return this;
    }
}