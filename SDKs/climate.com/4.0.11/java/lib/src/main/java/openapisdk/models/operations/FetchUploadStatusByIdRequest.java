package openapisdk.models.operations;



public class FetchUploadStatusByIdRequest {
    public FetchUploadStatusByIdPathParams pathParams;
    public FetchUploadStatusByIdRequest withPathParams(FetchUploadStatusByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchUploadStatusByIdSecurity security;
    public FetchUploadStatusByIdRequest withSecurity(FetchUploadStatusByIdSecurity security) {
        this.security = security;
        return this;
    }
}