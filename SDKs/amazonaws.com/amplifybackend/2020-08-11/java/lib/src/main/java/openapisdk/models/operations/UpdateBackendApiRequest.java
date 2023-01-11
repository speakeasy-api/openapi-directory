package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBackendApiRequest {
    public UpdateBackendApiPathParams pathParams;
    public UpdateBackendApiRequest withPathParams(UpdateBackendApiPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateBackendApiHeaders headers;
    public UpdateBackendApiRequest withHeaders(UpdateBackendApiHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateBackendApiRequestBody request;
    public UpdateBackendApiRequest withRequest(UpdateBackendApiRequestBody request) {
        this.request = request;
        return this;
    }
}