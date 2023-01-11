package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RevokeIpRulesRequest {
    public RevokeIpRulesHeaders headers;
    public RevokeIpRulesRequest withHeaders(RevokeIpRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RevokeIpRulesRequest request;
    public RevokeIpRulesRequest withRequest(openapisdk.models.shared.RevokeIpRulesRequest request) {
        this.request = request;
        return this;
    }
}