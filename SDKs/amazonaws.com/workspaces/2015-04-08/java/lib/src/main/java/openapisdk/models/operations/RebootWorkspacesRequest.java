package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RebootWorkspacesRequest {
    public RebootWorkspacesHeaders headers;
    public RebootWorkspacesRequest withHeaders(RebootWorkspacesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RebootWorkspacesRequest request;
    public RebootWorkspacesRequest withRequest(openapisdk.models.shared.RebootWorkspacesRequest request) {
        this.request = request;
        return this;
    }
}