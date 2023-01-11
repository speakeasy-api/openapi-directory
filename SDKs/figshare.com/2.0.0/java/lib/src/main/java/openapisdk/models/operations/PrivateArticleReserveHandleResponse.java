package openapisdk.models.operations;



public class PrivateArticleReserveHandleResponse {
    public openapisdk.models.shared.ArticleHandle articleHandle;
    public PrivateArticleReserveHandleResponse withArticleHandle(openapisdk.models.shared.ArticleHandle articleHandle) {
        this.articleHandle = articleHandle;
        return this;
    }
    public String contentType;
    public PrivateArticleReserveHandleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateArticleReserveHandleResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateArticleReserveHandleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}