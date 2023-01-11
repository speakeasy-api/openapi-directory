package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFirewallPolicyChangeProtectionRequest {
    public UpdateFirewallPolicyChangeProtectionHeaders headers;
    public UpdateFirewallPolicyChangeProtectionRequest withHeaders(UpdateFirewallPolicyChangeProtectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateFirewallPolicyChangeProtectionRequest request;
    public UpdateFirewallPolicyChangeProtectionRequest withRequest(openapisdk.models.shared.UpdateFirewallPolicyChangeProtectionRequest request) {
        this.request = request;
        return this;
    }
}