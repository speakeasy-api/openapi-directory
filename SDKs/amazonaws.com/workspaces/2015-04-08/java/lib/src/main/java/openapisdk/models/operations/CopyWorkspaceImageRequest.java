package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CopyWorkspaceImageRequest {
    public CopyWorkspaceImageHeaders headers;
    public CopyWorkspaceImageRequest withHeaders(CopyWorkspaceImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CopyWorkspaceImageRequest request;
    public CopyWorkspaceImageRequest withRequest(openapisdk.models.shared.CopyWorkspaceImageRequest request) {
        this.request = request;
        return this;
    }
}