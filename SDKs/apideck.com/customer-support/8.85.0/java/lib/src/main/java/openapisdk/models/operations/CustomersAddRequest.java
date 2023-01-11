package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CustomersAddRequest {
    public CustomersAddQueryParams queryParams;
    public CustomersAddRequest withQueryParams(CustomersAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CustomersAddHeaders headers;
    public CustomersAddRequest withHeaders(CustomersAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomerSupportCustomerInput request;
    public CustomersAddRequest withRequest(openapisdk.models.shared.CustomerSupportCustomerInput request) {
        this.request = request;
        return this;
    }
    public CustomersAddSecurity security;
    public CustomersAddRequest withSecurity(CustomersAddSecurity security) {
        this.security = security;
        return this;
    }
}