package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PipelinesUpdateRequest {
    public PipelinesUpdatePathParams pathParams;
    public PipelinesUpdateRequest withPathParams(PipelinesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PipelinesUpdateQueryParams queryParams;
    public PipelinesUpdateRequest withQueryParams(PipelinesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PipelinesUpdateHeaders headers;
    public PipelinesUpdateRequest withHeaders(PipelinesUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PipelineInput request;
    public PipelinesUpdateRequest withRequest(openapisdk.models.shared.PipelineInput request) {
        this.request = request;
        return this;
    }
    public PipelinesUpdateSecurity security;
    public PipelinesUpdateRequest withSecurity(PipelinesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}