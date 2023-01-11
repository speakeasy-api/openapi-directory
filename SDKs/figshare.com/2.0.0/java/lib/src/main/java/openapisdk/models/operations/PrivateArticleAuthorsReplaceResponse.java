package openapisdk.models.operations;



public class PrivateArticleAuthorsReplaceResponse {
    public String contentType;
    public PrivateArticleAuthorsReplaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateArticleAuthorsReplaceResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PrivateArticleAuthorsReplaceResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PrivateArticleAuthorsReplaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}