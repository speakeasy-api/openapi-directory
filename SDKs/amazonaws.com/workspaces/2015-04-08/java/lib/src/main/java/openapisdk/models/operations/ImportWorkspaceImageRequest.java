package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportWorkspaceImageRequest {
    public ImportWorkspaceImageHeaders headers;
    public ImportWorkspaceImageRequest withHeaders(ImportWorkspaceImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImportWorkspaceImageRequest request;
    public ImportWorkspaceImageRequest withRequest(openapisdk.models.shared.ImportWorkspaceImageRequest request) {
        this.request = request;
        return this;
    }
}