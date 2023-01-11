package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSystemTemplateRequest {
    public DeleteSystemTemplateHeaders headers;
    public DeleteSystemTemplateRequest withHeaders(DeleteSystemTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteSystemTemplateRequest request;
    public DeleteSystemTemplateRequest withRequest(openapisdk.models.shared.DeleteSystemTemplateRequest request) {
        this.request = request;
        return this;
    }
}