package openapisdk.models.operations;



public class ReposGetPagesResponse {
    public String contentType;
    public ReposGetPagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetPagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetPagesResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Page page;
    public ReposGetPagesResponse withPage(openapisdk.models.shared.Page page) {
        this.page = page;
        return this;
    }
}