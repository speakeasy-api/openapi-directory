package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectDirectoryRequest {
    public ConnectDirectoryHeaders headers;
    public ConnectDirectoryRequest withHeaders(ConnectDirectoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConnectDirectoryRequest request;
    public ConnectDirectoryRequest withRequest(openapisdk.models.shared.ConnectDirectoryRequest request) {
        this.request = request;
        return this;
    }
}