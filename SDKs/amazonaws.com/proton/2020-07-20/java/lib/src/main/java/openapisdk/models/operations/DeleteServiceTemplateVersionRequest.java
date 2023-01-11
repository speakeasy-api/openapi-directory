package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteServiceTemplateVersionRequest {
    public DeleteServiceTemplateVersionHeaders headers;
    public DeleteServiceTemplateVersionRequest withHeaders(DeleteServiceTemplateVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteServiceTemplateVersionInput request;
    public DeleteServiceTemplateVersionRequest withRequest(openapisdk.models.shared.DeleteServiceTemplateVersionInput request) {
        this.request = request;
        return this;
    }
}