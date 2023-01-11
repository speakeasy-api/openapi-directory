package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMobileDeviceAccessRuleRequest {
    public CreateMobileDeviceAccessRuleHeaders headers;
    public CreateMobileDeviceAccessRuleRequest withHeaders(CreateMobileDeviceAccessRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateMobileDeviceAccessRuleRequest request;
    public CreateMobileDeviceAccessRuleRequest withRequest(openapisdk.models.shared.CreateMobileDeviceAccessRuleRequest request) {
        this.request = request;
        return this;
    }
}