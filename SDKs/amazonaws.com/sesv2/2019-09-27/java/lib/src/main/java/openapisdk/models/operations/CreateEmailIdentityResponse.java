package openapisdk.models.operations;



public class CreateEmailIdentityResponse {
    public Object alreadyExistsException;
    public CreateEmailIdentityResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public Object badRequestException;
    public CreateEmailIdentityResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object concurrentModificationException;
    public CreateEmailIdentityResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public CreateEmailIdentityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateEmailIdentityResponse createEmailIdentityResponse;
    public CreateEmailIdentityResponse withCreateEmailIdentityResponse(openapisdk.models.shared.CreateEmailIdentityResponse createEmailIdentityResponse) {
        this.createEmailIdentityResponse = createEmailIdentityResponse;
        return this;
    }
    public Object limitExceededException;
    public CreateEmailIdentityResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateEmailIdentityResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateEmailIdentityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateEmailIdentityResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}