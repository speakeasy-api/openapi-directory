package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminCreateImpersonationOAuthTokenRequest {
    public EnterpriseAdminCreateImpersonationOAuthTokenPathParams pathParams;
    public EnterpriseAdminCreateImpersonationOAuthTokenRequest withPathParams(EnterpriseAdminCreateImpersonationOAuthTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminCreateImpersonationOAuthTokenRequestBody request;
    public EnterpriseAdminCreateImpersonationOAuthTokenRequest withRequest(EnterpriseAdminCreateImpersonationOAuthTokenRequestBody request) {
        this.request = request;
        return this;
    }
}