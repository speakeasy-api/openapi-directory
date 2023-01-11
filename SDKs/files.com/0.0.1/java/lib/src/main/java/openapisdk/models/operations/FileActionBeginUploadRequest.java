package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileActionBeginUploadRequest {
    public FileActionBeginUploadPathParams pathParams;
    public FileActionBeginUploadRequest withPathParams(FileActionBeginUploadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public FileActionBeginUploadRequestBody request;
    public FileActionBeginUploadRequest withRequest(FileActionBeginUploadRequestBody request) {
        this.request = request;
        return this;
    }
}