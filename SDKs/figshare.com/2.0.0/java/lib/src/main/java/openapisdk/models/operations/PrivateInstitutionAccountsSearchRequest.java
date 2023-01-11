package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateInstitutionAccountsSearchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstitutionAccountsSearch request;
    public PrivateInstitutionAccountsSearchRequest withRequest(openapisdk.models.shared.InstitutionAccountsSearch request) {
        this.request = request;
        return this;
    }
    public PrivateInstitutionAccountsSearchSecurity security;
    public PrivateInstitutionAccountsSearchRequest withSecurity(PrivateInstitutionAccountsSearchSecurity security) {
        this.security = security;
        return this;
    }
}