package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnvironmentTemplateRequest {
    public GetEnvironmentTemplateHeaders headers;
    public GetEnvironmentTemplateRequest withHeaders(GetEnvironmentTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetEnvironmentTemplateInput request;
    public GetEnvironmentTemplateRequest withRequest(openapisdk.models.shared.GetEnvironmentTemplateInput request) {
        this.request = request;
        return this;
    }
}