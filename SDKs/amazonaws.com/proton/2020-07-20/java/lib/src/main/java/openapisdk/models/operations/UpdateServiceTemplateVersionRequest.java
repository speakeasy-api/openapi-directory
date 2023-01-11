package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceTemplateVersionRequest {
    public UpdateServiceTemplateVersionHeaders headers;
    public UpdateServiceTemplateVersionRequest withHeaders(UpdateServiceTemplateVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateServiceTemplateVersionInput request;
    public UpdateServiceTemplateVersionRequest withRequest(openapisdk.models.shared.UpdateServiceTemplateVersionInput request) {
        this.request = request;
        return this;
    }
}