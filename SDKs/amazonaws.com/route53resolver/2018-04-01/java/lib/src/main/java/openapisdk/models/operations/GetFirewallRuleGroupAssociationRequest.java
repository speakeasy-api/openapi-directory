package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFirewallRuleGroupAssociationRequest {
    public GetFirewallRuleGroupAssociationHeaders headers;
    public GetFirewallRuleGroupAssociationRequest withHeaders(GetFirewallRuleGroupAssociationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetFirewallRuleGroupAssociationRequest request;
    public GetFirewallRuleGroupAssociationRequest withRequest(openapisdk.models.shared.GetFirewallRuleGroupAssociationRequest request) {
        this.request = request;
        return this;
    }
}