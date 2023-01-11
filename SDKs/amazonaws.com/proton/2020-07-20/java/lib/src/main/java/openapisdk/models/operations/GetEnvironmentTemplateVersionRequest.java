package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnvironmentTemplateVersionRequest {
    public GetEnvironmentTemplateVersionHeaders headers;
    public GetEnvironmentTemplateVersionRequest withHeaders(GetEnvironmentTemplateVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetEnvironmentTemplateVersionInput request;
    public GetEnvironmentTemplateVersionRequest withRequest(openapisdk.models.shared.GetEnvironmentTemplateVersionInput request) {
        this.request = request;
        return this;
    }
}