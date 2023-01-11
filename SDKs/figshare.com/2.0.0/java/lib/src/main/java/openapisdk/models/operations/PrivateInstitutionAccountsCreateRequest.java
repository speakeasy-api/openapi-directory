package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateInstitutionAccountsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AccountCreate request;
    public PrivateInstitutionAccountsCreateRequest withRequest(openapisdk.models.shared.AccountCreate request) {
        this.request = request;
        return this;
    }
    public PrivateInstitutionAccountsCreateSecurity security;
    public PrivateInstitutionAccountsCreateRequest withSecurity(PrivateInstitutionAccountsCreateSecurity security) {
        this.security = security;
        return this;
    }
}