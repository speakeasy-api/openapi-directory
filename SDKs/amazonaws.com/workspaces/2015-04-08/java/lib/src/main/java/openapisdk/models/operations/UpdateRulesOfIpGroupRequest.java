package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRulesOfIpGroupRequest {
    public UpdateRulesOfIpGroupHeaders headers;
    public UpdateRulesOfIpGroupRequest withHeaders(UpdateRulesOfIpGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateRulesOfIpGroupRequest request;
    public UpdateRulesOfIpGroupRequest withRequest(openapisdk.models.shared.UpdateRulesOfIpGroupRequest request) {
        this.request = request;
        return this;
    }
}