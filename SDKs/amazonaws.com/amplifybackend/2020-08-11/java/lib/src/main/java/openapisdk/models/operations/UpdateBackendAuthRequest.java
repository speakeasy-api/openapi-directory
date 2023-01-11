package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBackendAuthRequest {
    public UpdateBackendAuthPathParams pathParams;
    public UpdateBackendAuthRequest withPathParams(UpdateBackendAuthPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateBackendAuthHeaders headers;
    public UpdateBackendAuthRequest withHeaders(UpdateBackendAuthHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateBackendAuthRequestBody request;
    public UpdateBackendAuthRequest withRequest(UpdateBackendAuthRequestBody request) {
        this.request = request;
        return this;
    }
}