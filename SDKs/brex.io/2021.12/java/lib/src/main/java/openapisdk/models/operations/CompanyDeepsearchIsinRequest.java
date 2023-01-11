package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyDeepsearchIsinRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CompanyDeepsearchIsinRequestBody request;
    public CompanyDeepsearchIsinRequest withRequest(CompanyDeepsearchIsinRequestBody request) {
        this.request = request;
        return this;
    }
    public CompanyDeepsearchIsinSecurity security;
    public CompanyDeepsearchIsinRequest withSecurity(CompanyDeepsearchIsinSecurity security) {
        this.security = security;
        return this;
    }
}