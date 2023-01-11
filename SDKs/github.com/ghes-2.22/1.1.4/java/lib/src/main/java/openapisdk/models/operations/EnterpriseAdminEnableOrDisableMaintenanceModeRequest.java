package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminEnableOrDisableMaintenanceModeRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody request;
    public EnterpriseAdminEnableOrDisableMaintenanceModeRequest withRequest(EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody request) {
        this.request = request;
        return this;
    }
}