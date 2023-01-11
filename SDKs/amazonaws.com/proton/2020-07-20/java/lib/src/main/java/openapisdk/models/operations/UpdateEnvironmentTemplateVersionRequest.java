package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEnvironmentTemplateVersionRequest {
    public UpdateEnvironmentTemplateVersionHeaders headers;
    public UpdateEnvironmentTemplateVersionRequest withHeaders(UpdateEnvironmentTemplateVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateEnvironmentTemplateVersionInput request;
    public UpdateEnvironmentTemplateVersionRequest withRequest(openapisdk.models.shared.UpdateEnvironmentTemplateVersionInput request) {
        this.request = request;
        return this;
    }
}