package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminCreateOrgRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminCreateOrgRequestBody request;
    public EnterpriseAdminCreateOrgRequest withRequest(EnterpriseAdminCreateOrgRequestBody request) {
        this.request = request;
        return this;
    }
}