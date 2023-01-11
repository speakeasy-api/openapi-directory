package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileActionCopyRequest {
    public FileActionCopyPathParams pathParams;
    public FileActionCopyRequest withPathParams(FileActionCopyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public FileActionCopyRequestBody request;
    public FileActionCopyRequest withRequest(FileActionCopyRequestBody request) {
        this.request = request;
        return this;
    }
}