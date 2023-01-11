package openapisdk.models.operations;



public class DeleteIdentitiesResponse {
    public String contentType;
    public DeleteIdentitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteIdentitiesResponse deleteIdentitiesResponse;
    public DeleteIdentitiesResponse withDeleteIdentitiesResponse(openapisdk.models.shared.DeleteIdentitiesResponse deleteIdentitiesResponse) {
        this.deleteIdentitiesResponse = deleteIdentitiesResponse;
        return this;
    }
    public Object internalErrorException;
    public DeleteIdentitiesResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteIdentitiesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Long statusCode;
    public DeleteIdentitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteIdentitiesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}