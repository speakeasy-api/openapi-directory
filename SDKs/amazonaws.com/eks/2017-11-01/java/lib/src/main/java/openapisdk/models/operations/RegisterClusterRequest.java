package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterClusterRequest {
    public RegisterClusterHeaders headers;
    public RegisterClusterRequest withHeaders(RegisterClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RegisterClusterRequestBody request;
    public RegisterClusterRequest withRequest(RegisterClusterRequestBody request) {
        this.request = request;
        return this;
    }
}