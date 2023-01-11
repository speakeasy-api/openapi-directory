package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFirewallRuleGroupAssociationRequest {
    public UpdateFirewallRuleGroupAssociationHeaders headers;
    public UpdateFirewallRuleGroupAssociationRequest withHeaders(UpdateFirewallRuleGroupAssociationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateFirewallRuleGroupAssociationRequest request;
    public UpdateFirewallRuleGroupAssociationRequest withRequest(openapisdk.models.shared.UpdateFirewallRuleGroupAssociationRequest request) {
        this.request = request;
        return this;
    }
}