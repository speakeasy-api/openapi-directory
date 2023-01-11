package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceTemplateRequest {
    public UpdateServiceTemplateHeaders headers;
    public UpdateServiceTemplateRequest withHeaders(UpdateServiceTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateServiceTemplateInput request;
    public UpdateServiceTemplateRequest withRequest(openapisdk.models.shared.UpdateServiceTemplateInput request) {
        this.request = request;
        return this;
    }
}