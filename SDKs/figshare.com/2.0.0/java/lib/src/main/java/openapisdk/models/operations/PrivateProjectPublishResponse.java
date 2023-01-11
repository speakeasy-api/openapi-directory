package openapisdk.models.operations;



public class PrivateProjectPublishResponse {
    public String contentType;
    public PrivateProjectPublishResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateProjectPublishResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.ResponseMessage responseMessage;
    public PrivateProjectPublishResponse withResponseMessage(openapisdk.models.shared.ResponseMessage responseMessage) {
        this.responseMessage = responseMessage;
        return this;
    }
    public Long statusCode;
    public PrivateProjectPublishResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}