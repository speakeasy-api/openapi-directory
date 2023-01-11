package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductOrderConciergeRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ProductOrderConciergeRequestBody request;
    public ProductOrderConciergeRequest withRequest(ProductOrderConciergeRequestBody request) {
        this.request = request;
        return this;
    }
    public ProductOrderConciergeSecurity security;
    public ProductOrderConciergeRequest withSecurity(ProductOrderConciergeSecurity security) {
        this.security = security;
        return this;
    }
}