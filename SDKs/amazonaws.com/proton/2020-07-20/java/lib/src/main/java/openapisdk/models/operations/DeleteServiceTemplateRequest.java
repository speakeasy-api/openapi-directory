package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteServiceTemplateRequest {
    public DeleteServiceTemplateHeaders headers;
    public DeleteServiceTemplateRequest withHeaders(DeleteServiceTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteServiceTemplateInput request;
    public DeleteServiceTemplateRequest withRequest(openapisdk.models.shared.DeleteServiceTemplateInput request) {
        this.request = request;
        return this;
    }
}