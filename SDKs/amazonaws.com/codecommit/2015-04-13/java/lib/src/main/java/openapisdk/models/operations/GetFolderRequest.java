package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFolderRequest {
    public GetFolderHeaders headers;
    public GetFolderRequest withHeaders(GetFolderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetFolderInput request;
    public GetFolderRequest withRequest(openapisdk.models.shared.GetFolderInput request) {
        this.request = request;
        return this;
    }
}