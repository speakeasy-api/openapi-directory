package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductOrderUboRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ProductOrderUboRequestBody request;
    public ProductOrderUboRequest withRequest(ProductOrderUboRequestBody request) {
        this.request = request;
        return this;
    }
    public ProductOrderUboSecurity security;
    public ProductOrderUboRequest withSecurity(ProductOrderUboSecurity security) {
        this.security = security;
        return this;
    }
}