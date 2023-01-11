package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDatabaseFirewallRequest {
    public UpdateDatabaseFirewallPathParams pathParams;
    public UpdateDatabaseFirewallRequest withPathParams(UpdateDatabaseFirewallPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDatabaseFirewallRequestBodyInput request;
    public UpdateDatabaseFirewallRequest withRequest(UpdateDatabaseFirewallRequestBodyInput request) {
        this.request = request;
        return this;
    }
}