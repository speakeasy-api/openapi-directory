package openapisdk.models.operations;



public class PrivateArticleAuthorsListResponse {
    public openapisdk.models.shared.Author[] authors;
    public PrivateArticleAuthorsListResponse withAuthors(openapisdk.models.shared.Author[] authors) {
        this.authors = authors;
        return this;
    }
    public String contentType;
    public PrivateArticleAuthorsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateArticleAuthorsListResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateArticleAuthorsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}