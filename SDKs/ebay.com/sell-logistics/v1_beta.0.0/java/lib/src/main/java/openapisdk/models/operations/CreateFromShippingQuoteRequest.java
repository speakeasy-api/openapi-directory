package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFromShippingQuoteRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateShipmentFromQuoteRequest request;
    public CreateFromShippingQuoteRequest withRequest(openapisdk.models.shared.CreateShipmentFromQuoteRequest request) {
        this.request = request;
        return this;
    }
    public CreateFromShippingQuoteSecurity security;
    public CreateFromShippingQuoteRequest withSecurity(CreateFromShippingQuoteSecurity security) {
        this.security = security;
        return this;
    }
}