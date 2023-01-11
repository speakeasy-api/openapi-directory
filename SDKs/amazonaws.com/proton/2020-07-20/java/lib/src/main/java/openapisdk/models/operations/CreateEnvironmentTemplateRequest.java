package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEnvironmentTemplateRequest {
    public CreateEnvironmentTemplateHeaders headers;
    public CreateEnvironmentTemplateRequest withHeaders(CreateEnvironmentTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateEnvironmentTemplateInput request;
    public CreateEnvironmentTemplateRequest withRequest(openapisdk.models.shared.CreateEnvironmentTemplateInput request) {
        this.request = request;
        return this;
    }
}