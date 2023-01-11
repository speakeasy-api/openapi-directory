package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBackendApiModelsRequest {
    public GetBackendApiModelsPathParams pathParams;
    public GetBackendApiModelsRequest withPathParams(GetBackendApiModelsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetBackendApiModelsHeaders headers;
    public GetBackendApiModelsRequest withHeaders(GetBackendApiModelsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetBackendApiModelsRequestBody request;
    public GetBackendApiModelsRequest withRequest(GetBackendApiModelsRequestBody request) {
        this.request = request;
        return this;
    }
}