package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RebuildWorkspacesRequest {
    public RebuildWorkspacesHeaders headers;
    public RebuildWorkspacesRequest withHeaders(RebuildWorkspacesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RebuildWorkspacesRequest request;
    public RebuildWorkspacesRequest withRequest(openapisdk.models.shared.RebuildWorkspacesRequest request) {
        this.request = request;
        return this;
    }
}