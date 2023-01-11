package openapisdk.models.operations;



public class ArticleVersionUpdateThumbResponse {
    public String contentType;
    public ArticleVersionUpdateThumbResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public ArticleVersionUpdateThumbResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ArticleVersionUpdateThumbResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ArticleVersionUpdateThumbResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}