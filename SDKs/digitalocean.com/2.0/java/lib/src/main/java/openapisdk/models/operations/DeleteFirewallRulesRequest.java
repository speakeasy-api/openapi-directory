package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFirewallRulesRequest {
    public DeleteFirewallRulesPathParams pathParams;
    public DeleteFirewallRulesRequest withPathParams(DeleteFirewallRulesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteFirewallRulesRequestBody request;
    public DeleteFirewallRulesRequest withRequest(DeleteFirewallRulesRequestBody request) {
        this.request = request;
        return this;
    }
}