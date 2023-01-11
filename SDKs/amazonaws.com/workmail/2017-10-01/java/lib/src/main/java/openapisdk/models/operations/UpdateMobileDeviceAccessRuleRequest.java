package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMobileDeviceAccessRuleRequest {
    public UpdateMobileDeviceAccessRuleHeaders headers;
    public UpdateMobileDeviceAccessRuleRequest withHeaders(UpdateMobileDeviceAccessRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateMobileDeviceAccessRuleRequest request;
    public UpdateMobileDeviceAccessRuleRequest withRequest(openapisdk.models.shared.UpdateMobileDeviceAccessRuleRequest request) {
        this.request = request;
        return this;
    }
}