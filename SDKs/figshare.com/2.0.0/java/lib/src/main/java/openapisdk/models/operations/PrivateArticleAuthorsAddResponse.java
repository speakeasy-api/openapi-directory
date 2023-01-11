package openapisdk.models.operations;



public class PrivateArticleAuthorsAddResponse {
    public String contentType;
    public PrivateArticleAuthorsAddResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateArticleAuthorsAddResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PrivateArticleAuthorsAddResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PrivateArticleAuthorsAddResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}