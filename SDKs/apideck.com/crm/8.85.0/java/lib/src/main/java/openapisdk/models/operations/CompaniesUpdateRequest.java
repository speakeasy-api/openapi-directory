package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompaniesUpdateRequest {
    public CompaniesUpdatePathParams pathParams;
    public CompaniesUpdateRequest withPathParams(CompaniesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CompaniesUpdateQueryParams queryParams;
    public CompaniesUpdateRequest withQueryParams(CompaniesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CompaniesUpdateHeaders headers;
    public CompaniesUpdateRequest withHeaders(CompaniesUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CompanyInput request;
    public CompaniesUpdateRequest withRequest(openapisdk.models.shared.CompanyInput request) {
        this.request = request;
        return this;
    }
    public CompaniesUpdateSecurity security;
    public CompaniesUpdateRequest withSecurity(CompaniesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}