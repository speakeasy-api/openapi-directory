package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddFolderRequest {
    public AddFolderHeaders headers;
    public AddFolderRequest withHeaders(AddFolderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddFolderAddFolderRequestBody request;
    public AddFolderRequest withRequest(AddFolderAddFolderRequestBody request) {
        this.request = request;
        return this;
    }
}