package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceTemplateRequest {
    public CreateServiceTemplateHeaders headers;
    public CreateServiceTemplateRequest withHeaders(CreateServiceTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateServiceTemplateInput request;
    public CreateServiceTemplateRequest withRequest(openapisdk.models.shared.CreateServiceTemplateInput request) {
        this.request = request;
        return this;
    }
}