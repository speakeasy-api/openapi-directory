package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveAttributesRequest {
    public RemoveAttributesPathParams pathParams;
    public RemoveAttributesRequest withPathParams(RemoveAttributesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveAttributesHeaders headers;
    public RemoveAttributesRequest withHeaders(RemoveAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveAttributesRequestBody request;
    public RemoveAttributesRequest withRequest(RemoveAttributesRequestBody request) {
        this.request = request;
        return this;
    }
}