package openapisdk.models.operations;



public class PrivateCollectionAuthorsListResponse {
    public openapisdk.models.shared.Author[] authors;
    public PrivateCollectionAuthorsListResponse withAuthors(openapisdk.models.shared.Author[] authors) {
        this.authors = authors;
        return this;
    }
    public String contentType;
    public PrivateCollectionAuthorsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateCollectionAuthorsListResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateCollectionAuthorsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}