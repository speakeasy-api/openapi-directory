package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeregisterRdsDbInstanceRequest {
    public DeregisterRdsDbInstanceHeaders headers;
    public DeregisterRdsDbInstanceRequest withHeaders(DeregisterRdsDbInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeregisterRdsDbInstanceRequest request;
    public DeregisterRdsDbInstanceRequest withRequest(openapisdk.models.shared.DeregisterRdsDbInstanceRequest request) {
        this.request = request;
        return this;
    }
}