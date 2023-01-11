package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminUpdatePreReceiveEnvironmentRequest {
    public EnterpriseAdminUpdatePreReceiveEnvironmentPathParams pathParams;
    public EnterpriseAdminUpdatePreReceiveEnvironmentRequest withPathParams(EnterpriseAdminUpdatePreReceiveEnvironmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody request;
    public EnterpriseAdminUpdatePreReceiveEnvironmentRequest withRequest(EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody request) {
        this.request = request;
        return this;
    }
}