package openapisdk.models.operations;



public class PrivateAuthorDetailsResponse {
    public openapisdk.models.shared.AuthorComplete authorComplete;
    public PrivateAuthorDetailsResponse withAuthorComplete(openapisdk.models.shared.AuthorComplete authorComplete) {
        this.authorComplete = authorComplete;
        return this;
    }
    public String contentType;
    public PrivateAuthorDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateAuthorDetailsResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateAuthorDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}