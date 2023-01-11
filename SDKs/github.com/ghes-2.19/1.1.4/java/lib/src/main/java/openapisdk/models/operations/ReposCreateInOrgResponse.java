package openapisdk.models.operations;



public class ReposCreateInOrgResponse {
    public String contentType;
    public ReposCreateInOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposCreateInOrgResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposCreateInOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposCreateInOrgResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Repository repository;
    public ReposCreateInOrgResponse withRepository(openapisdk.models.shared.Repository repository) {
        this.repository = repository;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposCreateInOrgResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}