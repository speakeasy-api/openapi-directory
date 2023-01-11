package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FilterStoppingsRequest {
    public FilterStoppingsPathParams pathParams;
    public FilterStoppingsRequest withPathParams(FilterStoppingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public Object request;
    public FilterStoppingsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}