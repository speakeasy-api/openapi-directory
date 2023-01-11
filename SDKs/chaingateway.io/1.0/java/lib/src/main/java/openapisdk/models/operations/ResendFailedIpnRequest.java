package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResendFailedIpnRequest {
    public ResendFailedIpnHeaders headers;
    public ResendFailedIpnRequest withHeaders(ResendFailedIpnHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResendFailedIpnRequest request;
    public ResendFailedIpnRequest withRequest(openapisdk.models.shared.ResendFailedIpnRequest request) {
        this.request = request;
        return this;
    }
}