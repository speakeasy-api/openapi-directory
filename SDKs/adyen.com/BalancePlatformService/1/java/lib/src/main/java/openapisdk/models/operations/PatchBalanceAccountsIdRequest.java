package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchBalanceAccountsIdRequest {
    public PatchBalanceAccountsIdPathParams pathParams;
    public PatchBalanceAccountsIdRequest withPathParams(PatchBalanceAccountsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PatchBalanceAccountsIdRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PatchBalanceAccountsIdSecurity security;
    public PatchBalanceAccountsIdRequest withSecurity(PatchBalanceAccountsIdSecurity security) {
        this.security = security;
        return this;
    }
}