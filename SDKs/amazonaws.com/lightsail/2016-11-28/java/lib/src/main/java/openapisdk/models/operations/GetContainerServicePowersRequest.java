package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContainerServicePowersRequest {
    public GetContainerServicePowersHeaders headers;
    public GetContainerServicePowersRequest withHeaders(GetContainerServicePowersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public GetContainerServicePowersRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}