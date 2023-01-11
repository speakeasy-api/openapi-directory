package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MerchantsUpdateRequest {
    public MerchantsUpdatePathParams pathParams;
    public MerchantsUpdateRequest withPathParams(MerchantsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MerchantsUpdateQueryParams queryParams;
    public MerchantsUpdateRequest withQueryParams(MerchantsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MerchantsUpdateHeaders headers;
    public MerchantsUpdateRequest withHeaders(MerchantsUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MerchantInput request;
    public MerchantsUpdateRequest withRequest(openapisdk.models.shared.MerchantInput request) {
        this.request = request;
        return this;
    }
    public MerchantsUpdateSecurity security;
    public MerchantsUpdateRequest withSecurity(MerchantsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}