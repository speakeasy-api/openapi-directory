package openapisdk.models.operations;



public class GetObjectResponse {
    public Object containerNotFoundException;
    public GetObjectResponse withContainerNotFoundException(Object containerNotFoundException) {
        this.containerNotFoundException = containerNotFoundException;
        return this;
    }
    public String contentType;
    public GetObjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetObjectResponse getObjectResponse;
    public GetObjectResponse withGetObjectResponse(openapisdk.models.shared.GetObjectResponse getObjectResponse) {
        this.getObjectResponse = getObjectResponse;
        return this;
    }
    public Object internalServerError;
    public GetObjectResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object objectNotFoundException;
    public GetObjectResponse withObjectNotFoundException(Object objectNotFoundException) {
        this.objectNotFoundException = objectNotFoundException;
        return this;
    }
    public Object requestedRangeNotSatisfiableException;
    public GetObjectResponse withRequestedRangeNotSatisfiableException(Object requestedRangeNotSatisfiableException) {
        this.requestedRangeNotSatisfiableException = requestedRangeNotSatisfiableException;
        return this;
    }
    public Long statusCode;
    public GetObjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}