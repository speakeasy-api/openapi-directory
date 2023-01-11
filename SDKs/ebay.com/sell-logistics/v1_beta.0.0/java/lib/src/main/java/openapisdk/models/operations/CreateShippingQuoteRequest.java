package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateShippingQuoteRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ShippingQuoteRequest request;
    public CreateShippingQuoteRequest withRequest(openapisdk.models.shared.ShippingQuoteRequest request) {
        this.request = request;
        return this;
    }
    public CreateShippingQuoteSecurity security;
    public CreateShippingQuoteRequest withSecurity(CreateShippingQuoteSecurity security) {
        this.security = security;
        return this;
    }
}