package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectionsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ConnectionsRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}