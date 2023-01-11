package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyAlternativeSearchRequest {
    public CompanyAlternativeSearchPathParams pathParams;
    public CompanyAlternativeSearchRequest withPathParams(CompanyAlternativeSearchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CompanyAlternativeSearchRequestBody request;
    public CompanyAlternativeSearchRequest withRequest(CompanyAlternativeSearchRequestBody request) {
        this.request = request;
        return this;
    }
    public CompanyAlternativeSearchSecurity security;
    public CompanyAlternativeSearchRequest withSecurity(CompanyAlternativeSearchSecurity security) {
        this.security = security;
        return this;
    }
}