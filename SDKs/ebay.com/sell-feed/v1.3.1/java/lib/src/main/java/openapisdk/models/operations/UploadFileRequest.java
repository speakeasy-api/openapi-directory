package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadFileRequest {
    public UploadFilePathParams pathParams;
    public UploadFileRequest withPathParams(UploadFilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public openapisdk.models.shared.FormDataContentDisposition request;
    public UploadFileRequest withRequest(openapisdk.models.shared.FormDataContentDisposition request) {
        this.request = request;
        return this;
    }
    public UploadFileSecurity security;
    public UploadFileRequest withSecurity(UploadFileSecurity security) {
        this.security = security;
        return this;
    }
}