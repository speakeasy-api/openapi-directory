package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MerchantsAddRequest {
    public MerchantsAddQueryParams queryParams;
    public MerchantsAddRequest withQueryParams(MerchantsAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MerchantsAddHeaders headers;
    public MerchantsAddRequest withHeaders(MerchantsAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MerchantInput request;
    public MerchantsAddRequest withRequest(openapisdk.models.shared.MerchantInput request) {
        this.request = request;
        return this;
    }
    public MerchantsAddSecurity security;
    public MerchantsAddRequest withSecurity(MerchantsAddSecurity security) {
        this.security = security;
        return this;
    }
}