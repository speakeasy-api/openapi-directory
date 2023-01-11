package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizeIpRulesRequest {
    public AuthorizeIpRulesHeaders headers;
    public AuthorizeIpRulesRequest withHeaders(AuthorizeIpRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AuthorizeIpRulesRequest request;
    public AuthorizeIpRulesRequest withRequest(openapisdk.models.shared.AuthorizeIpRulesRequest request) {
        this.request = request;
        return this;
    }
}