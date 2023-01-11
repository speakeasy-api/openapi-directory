package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFileSystemRequest {
    public UpdateFileSystemPathParams pathParams;
    public UpdateFileSystemRequest withPathParams(UpdateFileSystemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateFileSystemHeaders headers;
    public UpdateFileSystemRequest withHeaders(UpdateFileSystemHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateFileSystemRequestBody request;
    public UpdateFileSystemRequest withRequest(UpdateFileSystemRequestBody request) {
        this.request = request;
        return this;
    }
}