package openapisdk.models.operations;



public class UploadEvidenceFileRequest {
    public String serverURL;
    public UploadEvidenceFileRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UploadEvidenceFilePathParams pathParams;
    public UploadEvidenceFileRequest withPathParams(UploadEvidenceFilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UploadEvidenceFileSecurity security;
    public UploadEvidenceFileRequest withSecurity(UploadEvidenceFileSecurity security) {
        this.security = security;
        return this;
    }
}