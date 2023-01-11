package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEnvironmentTemplateVersionRequest {
    public CreateEnvironmentTemplateVersionHeaders headers;
    public CreateEnvironmentTemplateVersionRequest withHeaders(CreateEnvironmentTemplateVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateEnvironmentTemplateVersionInput request;
    public CreateEnvironmentTemplateVersionRequest withRequest(openapisdk.models.shared.CreateEnvironmentTemplateVersionInput request) {
        this.request = request;
        return this;
    }
}