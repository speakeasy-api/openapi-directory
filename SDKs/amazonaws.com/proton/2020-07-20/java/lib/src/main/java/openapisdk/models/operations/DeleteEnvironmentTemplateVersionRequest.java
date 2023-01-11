package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEnvironmentTemplateVersionRequest {
    public DeleteEnvironmentTemplateVersionHeaders headers;
    public DeleteEnvironmentTemplateVersionRequest withHeaders(DeleteEnvironmentTemplateVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteEnvironmentTemplateVersionInput request;
    public DeleteEnvironmentTemplateVersionRequest withRequest(openapisdk.models.shared.DeleteEnvironmentTemplateVersionInput request) {
        this.request = request;
        return this;
    }
}