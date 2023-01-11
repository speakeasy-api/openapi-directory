package openapisdk.models.operations;



public class UploadFileToLockerIdRequest {
    public UploadFileToLockerIdHeaders headers;
    public UploadFileToLockerIdRequest withHeaders(UploadFileToLockerIdHeaders headers) {
        this.headers = headers;
        return this;
    }
    public UploadFileToLockerIdRequests request;
    public UploadFileToLockerIdRequest withRequest(UploadFileToLockerIdRequests request) {
        this.request = request;
        return this;
    }
    public UploadFileToLockerIdSecurity security;
    public UploadFileToLockerIdRequest withSecurity(UploadFileToLockerIdSecurity security) {
        this.security = security;
        return this;
    }
}