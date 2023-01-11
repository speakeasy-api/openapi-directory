package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSystemTemplateRequest {
    public UpdateSystemTemplateHeaders headers;
    public UpdateSystemTemplateRequest withHeaders(UpdateSystemTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateSystemTemplateRequest request;
    public UpdateSystemTemplateRequest withRequest(openapisdk.models.shared.UpdateSystemTemplateRequest request) {
        this.request = request;
        return this;
    }
}