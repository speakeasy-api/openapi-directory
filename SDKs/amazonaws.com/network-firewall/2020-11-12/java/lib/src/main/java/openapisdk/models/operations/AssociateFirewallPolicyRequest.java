package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateFirewallPolicyRequest {
    public AssociateFirewallPolicyHeaders headers;
    public AssociateFirewallPolicyRequest withHeaders(AssociateFirewallPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateFirewallPolicyRequest request;
    public AssociateFirewallPolicyRequest withRequest(openapisdk.models.shared.AssociateFirewallPolicyRequest request) {
        this.request = request;
        return this;
    }
}