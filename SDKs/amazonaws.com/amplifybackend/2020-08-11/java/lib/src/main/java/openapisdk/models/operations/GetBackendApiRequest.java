package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBackendApiRequest {
    public GetBackendApiPathParams pathParams;
    public GetBackendApiRequest withPathParams(GetBackendApiPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetBackendApiHeaders headers;
    public GetBackendApiRequest withHeaders(GetBackendApiHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetBackendApiRequestBody request;
    public GetBackendApiRequest withRequest(GetBackendApiRequestBody request) {
        this.request = request;
        return this;
    }
}