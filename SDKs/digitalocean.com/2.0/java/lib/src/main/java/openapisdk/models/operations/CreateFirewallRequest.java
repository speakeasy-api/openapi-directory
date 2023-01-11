package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFirewallRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateFirewallRequestBodyInput request;
    public CreateFirewallRequest withRequest(CreateFirewallRequestBodyInput request) {
        this.request = request;
        return this;
    }
}