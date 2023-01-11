package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddFirewallRulesRequest {
    public AddFirewallRulesPathParams pathParams;
    public AddFirewallRulesRequest withPathParams(AddFirewallRulesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddFirewallRulesRequestBody request;
    public AddFirewallRulesRequest withRequest(AddFirewallRulesRequestBody request) {
        this.request = request;
        return this;
    }
}