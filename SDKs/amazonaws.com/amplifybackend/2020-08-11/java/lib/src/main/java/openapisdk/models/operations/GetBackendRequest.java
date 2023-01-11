package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBackendRequest {
    public GetBackendPathParams pathParams;
    public GetBackendRequest withPathParams(GetBackendPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetBackendHeaders headers;
    public GetBackendRequest withHeaders(GetBackendHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetBackendRequestBody request;
    public GetBackendRequest withRequest(GetBackendRequestBody request) {
        this.request = request;
        return this;
    }
}