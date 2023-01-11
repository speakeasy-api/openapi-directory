package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CustomersUpdateRequest {
    public CustomersUpdatePathParams pathParams;
    public CustomersUpdateRequest withPathParams(CustomersUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CustomersUpdateQueryParams queryParams;
    public CustomersUpdateRequest withQueryParams(CustomersUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CustomersUpdateHeaders headers;
    public CustomersUpdateRequest withHeaders(CustomersUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomerSupportCustomerInput request;
    public CustomersUpdateRequest withRequest(openapisdk.models.shared.CustomerSupportCustomerInput request) {
        this.request = request;
        return this;
    }
    public CustomersUpdateSecurity security;
    public CustomersUpdateRequest withSecurity(CustomersUpdateSecurity security) {
        this.security = security;
        return this;
    }
}