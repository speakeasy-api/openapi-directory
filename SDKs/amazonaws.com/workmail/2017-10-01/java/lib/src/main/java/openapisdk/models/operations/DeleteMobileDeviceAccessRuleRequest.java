package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMobileDeviceAccessRuleRequest {
    public DeleteMobileDeviceAccessRuleHeaders headers;
    public DeleteMobileDeviceAccessRuleRequest withHeaders(DeleteMobileDeviceAccessRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteMobileDeviceAccessRuleRequest request;
    public DeleteMobileDeviceAccessRuleRequest withRequest(openapisdk.models.shared.DeleteMobileDeviceAccessRuleRequest request) {
        this.request = request;
        return this;
    }
}