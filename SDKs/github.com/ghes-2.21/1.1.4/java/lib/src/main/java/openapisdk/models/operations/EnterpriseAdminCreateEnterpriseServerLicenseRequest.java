package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminCreateEnterpriseServerLicenseRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminCreateEnterpriseServerLicenseRequestBody request;
    public EnterpriseAdminCreateEnterpriseServerLicenseRequest withRequest(EnterpriseAdminCreateEnterpriseServerLicenseRequestBody request) {
        this.request = request;
        return this;
    }
}