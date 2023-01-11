package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FilterFileDataStoppingsRequest {
    public FilterFileDataStoppingsPathParams pathParams;
    public FilterFileDataStoppingsRequest withPathParams(FilterFileDataStoppingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public FilterFileDataStoppingsRequestBody request;
    public FilterFileDataStoppingsRequest withRequest(FilterFileDataStoppingsRequestBody request) {
        this.request = request;
        return this;
    }
}