package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMobileDeviceAccessRulesRequest {
    public ListMobileDeviceAccessRulesHeaders headers;
    public ListMobileDeviceAccessRulesRequest withHeaders(ListMobileDeviceAccessRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListMobileDeviceAccessRulesRequest request;
    public ListMobileDeviceAccessRulesRequest withRequest(openapisdk.models.shared.ListMobileDeviceAccessRulesRequest request) {
        this.request = request;
        return this;
    }
}