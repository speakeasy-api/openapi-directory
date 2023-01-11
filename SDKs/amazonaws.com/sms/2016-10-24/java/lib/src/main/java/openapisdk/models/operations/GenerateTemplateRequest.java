package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenerateTemplateRequest {
    public GenerateTemplateHeaders headers;
    public GenerateTemplateRequest withHeaders(GenerateTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GenerateTemplateRequest request;
    public GenerateTemplateRequest withRequest(openapisdk.models.shared.GenerateTemplateRequest request) {
        this.request = request;
        return this;
    }
}