package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TendersUpdateRequest {
    public TendersUpdatePathParams pathParams;
    public TendersUpdateRequest withPathParams(TendersUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TendersUpdateQueryParams queryParams;
    public TendersUpdateRequest withQueryParams(TendersUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TendersUpdateHeaders headers;
    public TendersUpdateRequest withHeaders(TendersUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TenderInput request;
    public TendersUpdateRequest withRequest(openapisdk.models.shared.TenderInput request) {
        this.request = request;
        return this;
    }
    public TendersUpdateSecurity security;
    public TendersUpdateRequest withSecurity(TendersUpdateSecurity security) {
        this.security = security;
        return this;
    }
}