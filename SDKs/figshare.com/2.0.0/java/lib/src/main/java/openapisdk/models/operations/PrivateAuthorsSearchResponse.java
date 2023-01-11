package openapisdk.models.operations;



public class PrivateAuthorsSearchResponse {
    public openapisdk.models.shared.Author[] authors;
    public PrivateAuthorsSearchResponse withAuthors(openapisdk.models.shared.Author[] authors) {
        this.authors = authors;
        return this;
    }
    public String contentType;
    public PrivateAuthorsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateAuthorsSearchResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateAuthorsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}