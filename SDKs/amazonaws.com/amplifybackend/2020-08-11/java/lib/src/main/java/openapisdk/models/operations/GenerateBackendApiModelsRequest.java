package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenerateBackendApiModelsRequest {
    public GenerateBackendApiModelsPathParams pathParams;
    public GenerateBackendApiModelsRequest withPathParams(GenerateBackendApiModelsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GenerateBackendApiModelsHeaders headers;
    public GenerateBackendApiModelsRequest withHeaders(GenerateBackendApiModelsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GenerateBackendApiModelsRequestBody request;
    public GenerateBackendApiModelsRequest withRequest(GenerateBackendApiModelsRequestBody request) {
        this.request = request;
        return this;
    }
}