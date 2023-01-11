package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TerminateWorkspacesRequest {
    public TerminateWorkspacesHeaders headers;
    public TerminateWorkspacesRequest withHeaders(TerminateWorkspacesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TerminateWorkspacesRequest request;
    public TerminateWorkspacesRequest withRequest(openapisdk.models.shared.TerminateWorkspacesRequest request) {
        this.request = request;
        return this;
    }
}