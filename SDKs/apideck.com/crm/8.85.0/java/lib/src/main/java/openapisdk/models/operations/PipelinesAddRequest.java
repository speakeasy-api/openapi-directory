package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PipelinesAddRequest {
    public PipelinesAddQueryParams queryParams;
    public PipelinesAddRequest withQueryParams(PipelinesAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PipelinesAddHeaders headers;
    public PipelinesAddRequest withHeaders(PipelinesAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PipelineInput request;
    public PipelinesAddRequest withRequest(openapisdk.models.shared.PipelineInput request) {
        this.request = request;
        return this;
    }
    public PipelinesAddSecurity security;
    public PipelinesAddRequest withSecurity(PipelinesAddSecurity security) {
        this.security = security;
        return this;
    }
}