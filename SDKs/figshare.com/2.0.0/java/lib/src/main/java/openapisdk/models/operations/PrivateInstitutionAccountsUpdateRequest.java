package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateInstitutionAccountsUpdateRequest {
    public PrivateInstitutionAccountsUpdatePathParams pathParams;
    public PrivateInstitutionAccountsUpdateRequest withPathParams(PrivateInstitutionAccountsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AccountUpdate request;
    public PrivateInstitutionAccountsUpdateRequest withRequest(openapisdk.models.shared.AccountUpdate request) {
        this.request = request;
        return this;
    }
    public PrivateInstitutionAccountsUpdateSecurity security;
    public PrivateInstitutionAccountsUpdateRequest withSecurity(PrivateInstitutionAccountsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}