package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductUpdateActionRequest {
    public ProductUpdateActionPathParams pathParams;
    public ProductUpdateActionRequest withPathParams(ProductUpdateActionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ProductUpdateActionRequestBody request;
    public ProductUpdateActionRequest withRequest(ProductUpdateActionRequestBody request) {
        this.request = request;
        return this;
    }
    public ProductUpdateActionSecurity security;
    public ProductUpdateActionRequest withSecurity(ProductUpdateActionSecurity security) {
        this.security = security;
        return this;
    }
}