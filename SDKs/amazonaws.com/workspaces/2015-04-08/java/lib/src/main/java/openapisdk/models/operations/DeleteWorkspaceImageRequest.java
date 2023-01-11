package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWorkspaceImageRequest {
    public DeleteWorkspaceImageHeaders headers;
    public DeleteWorkspaceImageRequest withHeaders(DeleteWorkspaceImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteWorkspaceImageRequest request;
    public DeleteWorkspaceImageRequest withRequest(openapisdk.models.shared.DeleteWorkspaceImageRequest request) {
        this.request = request;
        return this;
    }
}