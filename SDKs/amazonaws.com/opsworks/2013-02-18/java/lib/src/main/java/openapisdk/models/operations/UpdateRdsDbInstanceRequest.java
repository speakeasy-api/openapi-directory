package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRdsDbInstanceRequest {
    public UpdateRdsDbInstanceHeaders headers;
    public UpdateRdsDbInstanceRequest withHeaders(UpdateRdsDbInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateRdsDbInstanceRequest request;
    public UpdateRdsDbInstanceRequest withRequest(openapisdk.models.shared.UpdateRdsDbInstanceRequest request) {
        this.request = request;
        return this;
    }
}