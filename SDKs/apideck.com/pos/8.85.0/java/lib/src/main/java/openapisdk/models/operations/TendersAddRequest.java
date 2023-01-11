package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TendersAddRequest {
    public TendersAddQueryParams queryParams;
    public TendersAddRequest withQueryParams(TendersAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TendersAddHeaders headers;
    public TendersAddRequest withHeaders(TendersAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TenderInput request;
    public TendersAddRequest withRequest(openapisdk.models.shared.TenderInput request) {
        this.request = request;
        return this;
    }
    public TendersAddSecurity security;
    public TendersAddRequest withSecurity(TendersAddSecurity security) {
        this.security = security;
        return this;
    }
}