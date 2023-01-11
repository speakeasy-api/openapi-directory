package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterRdsDbInstanceRequest {
    public RegisterRdsDbInstanceHeaders headers;
    public RegisterRdsDbInstanceRequest withHeaders(RegisterRdsDbInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterRdsDbInstanceRequest request;
    public RegisterRdsDbInstanceRequest withRequest(openapisdk.models.shared.RegisterRdsDbInstanceRequest request) {
        this.request = request;
        return this;
    }
}