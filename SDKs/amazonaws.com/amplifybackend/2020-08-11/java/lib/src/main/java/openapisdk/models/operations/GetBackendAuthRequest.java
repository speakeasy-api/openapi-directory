package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBackendAuthRequest {
    public GetBackendAuthPathParams pathParams;
    public GetBackendAuthRequest withPathParams(GetBackendAuthPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetBackendAuthHeaders headers;
    public GetBackendAuthRequest withHeaders(GetBackendAuthHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetBackendAuthRequestBody request;
    public GetBackendAuthRequest withRequest(GetBackendAuthRequestBody request) {
        this.request = request;
        return this;
    }
}