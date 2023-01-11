package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEnvironmentTemplateRequest {
    public UpdateEnvironmentTemplateHeaders headers;
    public UpdateEnvironmentTemplateRequest withHeaders(UpdateEnvironmentTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateEnvironmentTemplateInput request;
    public UpdateEnvironmentTemplateRequest withRequest(openapisdk.models.shared.UpdateEnvironmentTemplateInput request) {
        this.request = request;
        return this;
    }
}