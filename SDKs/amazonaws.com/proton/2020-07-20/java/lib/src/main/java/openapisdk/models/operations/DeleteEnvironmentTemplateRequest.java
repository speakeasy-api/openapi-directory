package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEnvironmentTemplateRequest {
    public DeleteEnvironmentTemplateHeaders headers;
    public DeleteEnvironmentTemplateRequest withHeaders(DeleteEnvironmentTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteEnvironmentTemplateInput request;
    public DeleteEnvironmentTemplateRequest withRequest(openapisdk.models.shared.DeleteEnvironmentTemplateInput request) {
        this.request = request;
        return this;
    }
}