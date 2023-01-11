package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopWorkspacesRequest {
    public StopWorkspacesHeaders headers;
    public StopWorkspacesRequest withHeaders(StopWorkspacesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopWorkspacesRequest request;
    public StopWorkspacesRequest withRequest(openapisdk.models.shared.StopWorkspacesRequest request) {
        this.request = request;
        return this;
    }
}