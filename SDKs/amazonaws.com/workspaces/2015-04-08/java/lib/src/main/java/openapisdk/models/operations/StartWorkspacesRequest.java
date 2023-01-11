package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartWorkspacesRequest {
    public StartWorkspacesHeaders headers;
    public StartWorkspacesRequest withHeaders(StartWorkspacesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartWorkspacesRequest request;
    public StartWorkspacesRequest withRequest(openapisdk.models.shared.StartWorkspacesRequest request) {
        this.request = request;
        return this;
    }
}