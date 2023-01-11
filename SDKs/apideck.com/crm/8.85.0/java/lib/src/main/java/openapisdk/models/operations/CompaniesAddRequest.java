package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompaniesAddRequest {
    public CompaniesAddQueryParams queryParams;
    public CompaniesAddRequest withQueryParams(CompaniesAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CompaniesAddHeaders headers;
    public CompaniesAddRequest withHeaders(CompaniesAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CompanyInput request;
    public CompaniesAddRequest withRequest(openapisdk.models.shared.CompanyInput request) {
        this.request = request;
        return this;
    }
    public CompaniesAddSecurity security;
    public CompaniesAddRequest withSecurity(CompaniesAddSecurity security) {
        this.security = security;
        return this;
    }
}