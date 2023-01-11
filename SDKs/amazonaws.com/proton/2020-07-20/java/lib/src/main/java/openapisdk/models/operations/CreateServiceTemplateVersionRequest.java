package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceTemplateVersionRequest {
    public CreateServiceTemplateVersionHeaders headers;
    public CreateServiceTemplateVersionRequest withHeaders(CreateServiceTemplateVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateServiceTemplateVersionInput request;
    public CreateServiceTemplateVersionRequest withRequest(openapisdk.models.shared.CreateServiceTemplateVersionInput request) {
        this.request = request;
        return this;
    }
}